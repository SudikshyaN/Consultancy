const mongoose = require('mongoose');

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
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

async function findByEmail(email) {
  return User.findOne({ email: email.toLowerCase() });
}

async function findById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }

  return User.findById(id);
}

async function create({ name, email, passwordHash, role }) {
  return User.create({
    name,
    email: email.toLowerCase(),
    passwordHash,
    role,
  });
}

module.exports = {
  User,
  create,
  findByEmail,
  findById,
};
