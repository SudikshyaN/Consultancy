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

async function updateProfile(id, profileData) {
  return User.findByIdAndUpdate(
    id,
    { $set: { profile: profileData, name: profileData.name } },
    { new: true, runValidators: true }
  );
}

module.exports = {
  User,
  create,
  findByEmail,
  findById,
  updateProfile,
};
