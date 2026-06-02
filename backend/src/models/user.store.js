const mongoose = require('mongoose');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const localUsersPath = path.join(__dirname, '../../data/users.local.json');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    resetPasswordTokenHash: {
      type: String,
      default: null,
      index: true,
    },
    resetPasswordExpiresAt: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    profile: {
      dob: String,
      phone: String,
      nationality: String,
      city: String,
      about: String,
      degree: String,
      gpa: String,
      university: String,
      graduationYear: String,
      ielts: String,
      gmat: String,
      toefl: String,
      studyFields: [String],
      preferredCountries: [String],
      intakeYear: [String],
    },
    savedUniversities: [
      {
        name: String,
        country: String,
        course: String,
        savedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    savedDestinations: [
      {
        slug: {
          type: String,
          required: true,
          trim: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        visa: String,
        flag: String,
        savedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    applications: [
      {
        university: String,
        course: String,
        country: String,
        status: {
          type: String,
          enum: ['draft', 'applied', 'under-review', 'accepted', 'rejected', 'visa-ready'],
          default: 'draft',
        },
        submittedAt: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

function loadLocalUsers() {
  try {
    if (!fs.existsSync(localUsersPath)) {
      return new Map();
    }

    const users = JSON.parse(fs.readFileSync(localUsersPath, 'utf8'));
    return new Map(users.map((user) => [user.email, user]));
  } catch (err) {
    console.warn(`Could not load local users from ${localUsersPath}: ${err.message}`);
    return new Map();
  }
}

function saveLocalUsers() {
  fs.mkdirSync(path.dirname(localUsersPath), { recursive: true });
  fs.writeFileSync(
    localUsersPath,
    `${JSON.stringify([...memoryUsers.values()], null, 2)}\n`
  );
}

const memoryUsers = loadLocalUsers();

function databaseIsConnected() {
  return mongoose.connection.readyState === 1;
}

function cloneUser(user) {
  return JSON.parse(JSON.stringify(user));
}

async function findByEmail(email) {
  if (!databaseIsConnected()) {
    return cloneUser(memoryUsers.get(email.toLowerCase()) || null);
  }

  return User.findOne({ email: email.toLowerCase() });
}

async function findById(id) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(id)) {
    const user = [...memoryUsers.values()].find((currentUser) => currentUser.id === id);
    return cloneUser(user || null);
  }

  return User.findById(id);
}

async function create({ name, email, passwordHash, role }) {
  if (!databaseIsConnected()) {
    const normalizedEmail = email.toLowerCase();

    if (memoryUsers.has(normalizedEmail)) {
      const duplicateError = new Error('Email is already registered');
      duplicateError.code = 11000;
      throw duplicateError;
    }

    const now = new Date().toISOString();
    const user = {
      id: crypto.randomUUID(),
      name,
      email: normalizedEmail,
      passwordHash,
      role,
      profile: {},
      savedUniversities: [],
      savedDestinations: [],
      applications: [],
      createdAt: now,
      updatedAt: now,
    };

    memoryUsers.set(normalizedEmail, user);
    saveLocalUsers();
    return cloneUser(user);
  }

  return User.create({
    name,
    email: email.toLowerCase(),
    passwordHash,
    role,
  });
}

async function setPasswordResetToken(email, tokenHash, expiresAt) {
  const normalizedEmail = email.toLowerCase();

  if (!databaseIsConnected()) {
    const existingUser = memoryUsers.get(normalizedEmail);

    if (!existingUser) {
      return null;
    }

    const updatedUser = {
      ...existingUser,
      resetPasswordTokenHash: tokenHash,
      resetPasswordExpiresAt: expiresAt.toISOString(),
      updatedAt: new Date().toISOString(),
    };

    memoryUsers.set(normalizedEmail, updatedUser);
    saveLocalUsers();
    return cloneUser(updatedUser);
  }

  return User.findOneAndUpdate(
    { email: normalizedEmail },
    {
      $set: {
        resetPasswordTokenHash: tokenHash,
        resetPasswordExpiresAt: expiresAt,
      },
    },
    { returnDocument: 'after' }
  );
}

async function findByPasswordResetToken(tokenHash) {
  const now = new Date();

  if (!databaseIsConnected()) {
    const user = [...memoryUsers.values()].find((currentUser) => {
      if (currentUser.resetPasswordTokenHash !== tokenHash) {
        return false;
      }

      return new Date(currentUser.resetPasswordExpiresAt || 0) > now;
    });

    return cloneUser(user || null);
  }

  return User.findOne({
    resetPasswordTokenHash: tokenHash,
    resetPasswordExpiresAt: { $gt: now },
  });
}

async function updatePasswordByResetToken(tokenHash, passwordHash) {
  const now = new Date();

  if (!databaseIsConnected()) {
    const existingUser = [...memoryUsers.values()].find((currentUser) => {
      if (currentUser.resetPasswordTokenHash !== tokenHash) {
        return false;
      }

      return new Date(currentUser.resetPasswordExpiresAt || 0) > now;
    });

    if (!existingUser) {
      return null;
    }

    const updatedUser = {
      ...existingUser,
      passwordHash,
      resetPasswordTokenHash: null,
      resetPasswordExpiresAt: null,
      updatedAt: new Date().toISOString(),
    };

    memoryUsers.set(updatedUser.email, updatedUser);
    saveLocalUsers();
    return cloneUser(updatedUser);
  }

  return User.findOneAndUpdate(
    {
      resetPasswordTokenHash: tokenHash,
      resetPasswordExpiresAt: { $gt: now },
    },
    {
      $set: { passwordHash },
      $unset: {
        resetPasswordTokenHash: '',
        resetPasswordExpiresAt: '',
      },
    },
    { returnDocument: 'after' }
  );
}

async function updateProfile(id, profileData) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(id)) {
    const existingUser = [...memoryUsers.values()].find((currentUser) => currentUser.id === id);

    if (!existingUser) {
      return null;
    }

    const updatedUser = {
      ...existingUser,
      name: profileData.name,
      profile: profileData,
      updatedAt: new Date().toISOString(),
    };

    memoryUsers.set(updatedUser.email, updatedUser);
    saveLocalUsers();
    return cloneUser(updatedUser);
  }

  return User.findByIdAndUpdate(
    id,
    { $set: { profile: profileData, name: profileData.name } },
    { returnDocument: 'after', runValidators: true }
  );
}

async function listSavedDestinations(id) {
  const user = await findById(id);

  return user?.savedDestinations || [];
}

async function addSavedDestination(id, destination) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(id)) {
    const existingUser = [...memoryUsers.values()].find((currentUser) => currentUser.id === id);

    if (!existingUser) {
      return null;
    }

    const savedDestinations = existingUser.savedDestinations || [];
    const existingDestination = savedDestinations.find((item) => item.slug === destination.slug);

    if (!existingDestination) {
      savedDestinations.unshift({
        ...destination,
        savedAt: new Date().toISOString(),
      });
    }

    const updatedUser = {
      ...existingUser,
      savedDestinations,
      updatedAt: new Date().toISOString(),
    };

    memoryUsers.set(updatedUser.email, updatedUser);
    saveLocalUsers();
    return cloneUser(updatedUser);
  }

  const user = await User.findById(id);

  if (!user) {
    return null;
  }

  user.savedDestinations = user.savedDestinations || [];

  const alreadySaved = user.savedDestinations.some((item) => item.slug === destination.slug);

  if (!alreadySaved) {
    user.savedDestinations.unshift(destination);
    await user.save();
  }

  return user;
}

async function removeSavedDestination(id, slug) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(id)) {
    const existingUser = [...memoryUsers.values()].find((currentUser) => currentUser.id === id);

    if (!existingUser) {
      return null;
    }

    const updatedUser = {
      ...existingUser,
      savedDestinations: (existingUser.savedDestinations || []).filter((item) => item.slug !== slug),
      updatedAt: new Date().toISOString(),
    };

    memoryUsers.set(updatedUser.email, updatedUser);
    saveLocalUsers();
    return cloneUser(updatedUser);
  }

  return User.findByIdAndUpdate(
    id,
    { $pull: { savedDestinations: { slug } } },
    { returnDocument: 'after' }
  );
}

async function syncPreferredCountries(id, countryName, action) {
  if (!databaseIsConnected() || !mongoose.Types.ObjectId.isValid(id)) {
    const existingUser = [...memoryUsers.values()].find((currentUser) => currentUser.id === id);
    if (!existingUser) return null;

    const profile = existingUser.profile || {};
    let preferredCountries = [...(profile.preferredCountries || [])];

    if (action === 'add') {
      if (!preferredCountries.includes(countryName)) {
        preferredCountries.push(countryName);
      }
    } else {
      preferredCountries = preferredCountries.filter((c) => c !== countryName);
    }

    const updatedUser = {
      ...existingUser,
      profile: { ...profile, preferredCountries },
      updatedAt: new Date().toISOString(),
    };

    memoryUsers.set(updatedUser.email, updatedUser);
    saveLocalUsers();
    return cloneUser(updatedUser);
  }

  const update = action === 'add' 
    ? { $addToSet: { 'profile.preferredCountries': countryName } }
    : { $pull: { 'profile.preferredCountries': countryName } };

  return User.findByIdAndUpdate(id, update, { returnDocument: 'after' });
}


module.exports = {
  User,
  addSavedDestination,
  create,
  findByEmail,
  findById,
  findByPasswordResetToken,
  listSavedDestinations,
  removeSavedDestination,
  setPasswordResetToken,
  updatePasswordByResetToken,
  updateProfile,
  syncPreferredCountries,
};
