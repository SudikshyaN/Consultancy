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

const USA_UNIVERSITIES = [
  {
    name: 'Arizona State University',
    country: 'USA',
    city: 'Tempe, Arizona',
    website: 'https://www.asu.edu',
    tuitionRange: 'USD 32k-38k / year',
    tags: ['STEM', 'Scholarships', 'Public university'],
    programs: [
      {
        name: 'MS Computer Science',
        fields: ['Computer Science', 'Artificial Intelligence', 'Data Science', 'Machine Learning'],
        degrees: ['bachelor', 'undergraduate'],
        minGpa: 3,
        minIelts: 6.5,
        minToefl: 80,
      },
    ],
  },
  {
    name: 'University of Illinois Chicago',
    country: 'USA',
    city: 'Chicago, Illinois',
    website: 'https://www.uic.edu',
    tuitionRange: 'USD 31k-36k / year',
    tags: ['Urban campus', 'Research', 'STEM'],
    programs: [
      {
        name: 'MS Data Science',
        fields: ['Data Science', 'Artificial Intelligence', 'Computer Science', 'Statistics'],
        degrees: ['bachelor', 'undergraduate'],
        minGpa: 3,
        minIelts: 6.5,
        minToefl: 80,
      },
    ],
  },
  {
    name: 'Pace University',
    country: 'USA',
    city: 'New York, New York',
    website: 'https://www.pace.edu',
    tuitionRange: 'USD 27k-34k / year',
    tags: ['Career focused', 'New York', 'Business'],
    programs: [
      {
        name: 'MS Information Systems',
        fields: ['Information Systems', 'Business Analytics', 'Data Science', 'Cloud Computing'],
        degrees: ['bachelor', 'undergraduate'],
        minGpa: 2.75,
        minIelts: 6.5,
        minToefl: 78,
      },
      {
        name: 'MBA',
        fields: ['Business', 'Finance', 'Marketing', 'Management'],
        degrees: ['bachelor', 'undergraduate'],
        minGpa: 2.75,
        minIelts: 6.5,
      },
    ],
  },
  {
    name: 'Stevens Institute of Technology',
    country: 'USA',
    city: 'Hoboken, New Jersey',
    website: 'https://www.stevens.edu',
    tuitionRange: 'USD 42k-48k / year',
    tags: ['Technology', 'Research', 'Near New York'],
    programs: [
      {
        name: 'MS Cybersecurity',
        fields: ['Cybersecurity', 'Computer Science', 'Cloud Computing'],
        degrees: ['bachelor', 'undergraduate'],
        minGpa: 3.2,
        minIelts: 7,
        minToefl: 86,
      },
    ],
  },
];

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function seedUsaIfEmpty() {
  const count = await University.countDocuments({ country: /^usa$/i });

  if (count === 0) {
    await University.insertMany(USA_UNIVERSITIES);
  }
}

async function seedUsaUniversities() {
  const operations = USA_UNIVERSITIES.map((university) => ({
    updateOne: {
      filter: {
        name: university.name,
        country: university.country,
      },
      update: {
        $set: university,
      },
      upsert: true,
    },
  }));

  if (operations.length === 0) {
    return { matchedCount: 0, modifiedCount: 0, upsertedCount: 0 };
  }

  return University.bulkWrite(operations);
}

function findByCountry(country) {
  return University.find({
    country: new RegExp(`^${escapeRegExp(country)}$`, 'i'),
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
  seedUsaUniversities,
  seedUsaIfEmpty,
  update,
};
