const mongoose = require('mongoose');

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    fields: [String],
    degrees: [String],
    minGpa: Number,
    minIelts: Number,
    minToefl: Number,
    minGmat: Number,
  },
  { _id: false }
);

const universitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    city: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    tuitionRange: {
      type: String,
      trim: true,
    },
    programs: [programSchema],
    tags: [String],
    active: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const University = mongoose.model('University', universitySchema);

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findByCountry(country) {
  const query = country ? { country: new RegExp(`^${escapeRegExp(country)}$`, 'i') } : {};
  return University.find({
    ...query,
    active: true,
  }).sort({ name: 1 });
}

function findAll(country) {
  const query = country ? { country: new RegExp(`^${escapeRegExp(country)}$`, 'i') } : {};

  return University.find(query).sort({ country: 1, name: 1 });
}

function create(data) {
  return University.create(data);
}

function update(id, data) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }

  return University.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

function remove(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }

  return University.findByIdAndDelete(id);
}

module.exports = {
  University,
  create,
  findAll,
  findByCountry,
  remove,
  update,
};

