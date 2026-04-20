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

module.exports = {
  register,
  login,
  me,
};
