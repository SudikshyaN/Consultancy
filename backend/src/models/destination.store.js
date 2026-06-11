const mongoose = require('mongoose');
const { DEFAULT_DESTINATIONS } = require('../data/default-destinations');

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    visa: {
      type: String,
      required: true,
      trim: true,
    },
    flag: {
      type: String,
      required: true,
      trim: true,
    },
    overview: String,
    highlights: [String],
    livingCost: String,
    tuition: String,
    visaFee: String,
    partTimeWork: String,
    ieltsRequirement: String,
    costBreakdown: {
      rent: { type: String, default: '0' },
      food: { type: String, default: '0' },
      transport: { type: String, default: '0' },
      bills: { type: String, default: '0' },
      personal: { type: String, default: '0' },
    },
    roadmap: [
      {
        title: String,
        duration: String,
        description: String,
        tags: [String],
        checklist: [
          {
            task: String,
          }
        ]
      }
    ],
    active: {
      type: Boolean,
      default: true,
      index: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model('Destination', destinationSchema);

function databaseIsConnected() {
  return mongoose.connection.readyState === 1;
}

async function ensureDefaults() {
  if (!databaseIsConnected()) {
    return DEFAULT_DESTINATIONS;
  }

  const count = await Destination.countDocuments();

  if (count === 0) {
    await Destination.insertMany(
      DEFAULT_DESTINATIONS.map((destination, index) => ({
        ...destination,
        order: index,
      }))
    );
  }

  return Destination.find({ active: true }).sort({ order: 1, name: 1 });
}

async function findActive() {
  if (!databaseIsConnected()) {
    return DEFAULT_DESTINATIONS;
  }

  await ensureDefaults();
  return Destination.find({ active: true }).sort({ order: 1, name: 1 });
}

module.exports = {
  Destination,
  findActive,
};
