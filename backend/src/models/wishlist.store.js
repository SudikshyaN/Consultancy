const mongoose = require('mongoose');

// In-memory wishlist for non-MongoDB (UUID-based local) users
const memoryWishlist = new Map(); // key: userId, value: Map<slug, item>

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    destinationSlug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    visa: String,
    flag: String,
  },
  {
    timestamps: true,
  }
);

wishlistSchema.index({ user: 1, destinationSlug: 1 }, { unique: true });

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
let collectionReadyPromise = null;

function databaseIsConnected() {
  return mongoose.connection.readyState === 1;
}

function getMemoryWishlist(userId) {
  if (!memoryWishlist.has(userId)) {
    memoryWishlist.set(userId, new Map());
  }
  return memoryWishlist.get(userId);
}

function memoryListByUser(userId) {
  const items = getMemoryWishlist(userId);
  return [...items.values()].sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));
}

function memoryAddDestination(userId, destination) {
  const items = getMemoryWishlist(userId);
  if (!items.has(destination.slug)) {
    items.set(destination.slug, {
      id: destination.slug,
      slug: destination.slug,
      name: destination.name,
      visa: destination.visa,
      flag: destination.flag,
      savedAt: new Date().toISOString(),
    });
  }
  return memoryListByUser(userId);
}

function memoryRemoveDestination(userId, slug) {
  const items = getMemoryWishlist(userId);
  items.delete(slug);
  return memoryListByUser(userId);
}

function memoryCountByUser(userId) {
  return getMemoryWishlist(userId).size;
}

async function ensureCollection() {
  if (!databaseIsConnected()) {
    return;
  }

  if (!collectionReadyPromise) {
    collectionReadyPromise = Wishlist.createCollection().catch((err) => {
      if (err.codeName !== 'NamespaceExists') {
        throw err;
      }
    });
  }

  await collectionReadyPromise;
}

function toSavedDestination(item) {
  return {
    id: item.id || item._id?.toString(),
    slug: item.destinationSlug,
    name: item.name,
    visa: item.visa,
    flag: item.flag,
    savedAt: item.createdAt,
  };
}

async function listByUser(userId) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(userId)) {
    return memoryListByUser(userId);
  }

  await ensureCollection();
  const items = await Wishlist.find({ user: userId }).sort({ createdAt: -1 }).lean();
  return items.map(toSavedDestination);
}

async function addDestination(userId, destination) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(userId)) {
    return memoryAddDestination(userId, destination);
  }

  await ensureCollection();
  await Wishlist.updateOne(
    {
      user: userId,
      destinationSlug: destination.slug,
    },
    {
      $setOnInsert: {
        user: userId,
        destinationSlug: destination.slug,
        name: destination.name,
        visa: destination.visa,
        flag: destination.flag,
      },
    },
    { upsert: true }
  );

  return listByUser(userId);
}

async function removeDestination(userId, slug) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(userId)) {
    return memoryRemoveDestination(userId, slug);
  }

  await ensureCollection();
  await Wishlist.deleteOne({ user: userId, destinationSlug: slug });
  return listByUser(userId);
}

async function countByUser(userId) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(userId)) {
    return memoryCountByUser(userId);
  }

  await ensureCollection();
  return Wishlist.countDocuments({ user: userId });
}

module.exports = {
  Wishlist,
  addDestination,
  countByUser,
  ensureCollection,
  listByUser,
  removeDestination,
};
