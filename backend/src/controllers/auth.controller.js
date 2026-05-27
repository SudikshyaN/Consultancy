const userStore = require('../models/user.store');
const { createToken } = require('../utils/jwt');
const { hashPassword, verifyPassword } = require('../utils/password');
const { sanitizeUser } = require('../utils/user');
const {
  validateLogin,
  validateRegister,
} = require('../validators/auth.validator');

async function register(req, res, next) {
  try {
    const { value, errors } = validateRegister(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    const existingUser = await userStore.findByEmail(value.email);

    if (existingUser) {
      return res.status(409).json({ message: 'Email is already registered' });
    }

    const passwordHash = await hashPassword(value.password);
    const user = await userStore.create({
      name: value.name,
      email: value.email,
      passwordHash,
      role: 'user',
    });
    const safeUser = sanitizeUser(user);
    const token = createToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return res.status(201).json({
      message: 'Registered successfully',
      token,
      user: safeUser,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Email is already registered' });
    }

    return next(err);
  }
}

async function registerAdmin(req, res, next) {
  try {
    const { value, errors } = validateRegister(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    const existingUser = await userStore.findByEmail(value.email);

    if (existingUser) {
      return res.status(409).json({ message: 'Email is already registered' });
    }

    const passwordHash = await hashPassword(value.password);
    const user = await userStore.create({
      name: value.name,
      email: value.email,
      passwordHash,
      role: 'admin',
    });
    const safeUser = sanitizeUser(user);
    const token = createToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return res.status(201).json({
      message: 'Admin registered successfully',
      token,
      user: safeUser,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Email is already registered' });
    }

    return next(err);
  }
}

async function login(req, res, next) {
  try {
    const { value, errors } = validateLogin(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    const user = await userStore.findByEmail(value.email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const passwordIsValid = await verifyPassword(value.password, user.passwordHash);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = createToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return res.json({
      message: 'Logged in successfully',
      token,
      user: sanitizeUser(user),
    });
  } catch (err) {
    return next(err);
  }
}

async function loginAdmin(req, res, next) {
  try {
    const { value, errors } = validateLogin(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    const user = await userStore.findByEmail(value.email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const passwordIsValid = await verifyPassword(value.password, user.passwordHash);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access is required' });
    }

    const token = createToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return res.json({
      message: 'Admin logged in successfully',
      token,
      user: sanitizeUser(user),
    });
  } catch (err) {
    return next(err);
  }
}

async function me(req, res, next) {
  try {
    const user = await userStore.findById(req.user.sub);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ user: sanitizeUser(user) });
  } catch (err) {
    return next(err);
  }
}

async function updateProfile(req, res, next) {
  try {
    const { name, ...profileData } = req.body;
    const user = await userStore.updateProfile(req.user.sub, { name, ...profileData });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Synchronize wishlist destinations with the new profile.preferredCountries list
    if (profileData.preferredCountries && Array.isArray(profileData.preferredCountries)) {
      const preferred = profileData.preferredCountries;
      
      const destinationStore = require('../models/destination.store');
      const wishlistStore = require('../models/wishlist.store');

      const allActive = await destinationStore.findActive();
      const currentWishlist = await wishlistStore.listByUser(req.user.sub);

      // Add to wishlist if in preferred list but not in current wishlist
      for (const countryName of preferred) {
        if (!currentWishlist.some(d => d.name.toLowerCase() === countryName.toLowerCase())) {
          const destDetail = allActive.find(d => d.name.toLowerCase() === countryName.toLowerCase());
          if (destDetail) {
            const destToSave = {
              slug: destDetail.slug,
              name: destDetail.name,
              visa: destDetail.visa,
              flag: destDetail.flag
            };
            await wishlistStore.addDestination(req.user.sub, destToSave);
            await userStore.addSavedDestination(req.user.sub, destToSave);
          }
        }
      }

      // Remove from wishlist if not in preferred list
      for (const item of currentWishlist) {
        if (!preferred.some(name => name.toLowerCase() === item.name.toLowerCase())) {
          await wishlistStore.removeDestination(req.user.sub, item.slug);
          await userStore.removeSavedDestination(req.user.sub, item.slug);
        }
      }
    }

    return res.json({ message: 'Profile updated', user: sanitizeUser(user) });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  registerAdmin,
  register,
  loginAdmin,
  login,
  me,
  updateProfile,
};
