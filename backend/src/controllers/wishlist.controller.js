const userStore = require('../models/user.store');
const wishlistStore = require('../models/wishlist.store');

function normalizeDestination(body) {
  return {
    slug: String(body.slug || '').trim().toLowerCase(),
    name: String(body.name || '').trim(),
    visa: String(body.visa || '').trim(),
    flag: String(body.flag || '').trim(),
  };
}

function validateDestination(destination) {
  const errors = [];

  if (!destination.slug) {
    errors.push({ field: 'slug', message: 'Destination slug is required' });
  }

  if (!destination.name) {
    errors.push({ field: 'name', message: 'Destination name is required' });
  }

  return errors;
}

async function listSavedDestinations(req, res, next) {
  try {
    const user = await userStore.findById(req.user.sub);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    for (const destination of user.savedDestinations || []) {
      await wishlistStore.addDestination(req.user.sub, {
        slug: destination.slug,
        name: destination.name,
        visa: destination.visa,
        flag: destination.flag,
      });
    }

    const savedDestinations = await wishlistStore.listByUser(req.user.sub);

    return res.json({ savedDestinations });
  } catch (err) {
    return next(err);
  }
}

async function addSavedDestination(req, res, next) {
  try {
    const destination = normalizeDestination(req.body);
    const errors = validateDestination(destination);

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    const user = await userStore.findById(req.user.sub);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const savedDestinations = await wishlistStore.addDestination(req.user.sub, destination);

    // Sync with Profile Preferences using safe method
    await userStore.syncPreferredCountries(req.user.sub, destination.name, 'add');

    return res.status(201).json({
      message: 'Destination added to preferences',
      savedDestinations,
    });
  } catch (err) {
    return next(err);
  }
}

async function removeSavedDestination(req, res, next) {
  try {
    const slug = String(req.params.slug || '').trim().toLowerCase();

    if (!slug) {
      return res.status(400).json({ message: 'Destination slug is required' });
    }

    const user = await userStore.findById(req.user.sub);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the destination name first to remove it from profile
    const currentWishlist = await wishlistStore.listByUser(req.user.sub);
    const target = currentWishlist.find((item) => item.slug === slug);

    const savedDestinations = await wishlistStore.removeDestination(req.user.sub, slug);

    if (target) {
      // Sync with Profile Preferences using safe method
      await userStore.syncPreferredCountries(req.user.sub, target.name, 'remove');
    }

    return res.json({
      message: 'Destination removed from preferences',
      savedDestinations,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  addSavedDestination,
  listSavedDestinations,
  removeSavedDestination,
};
