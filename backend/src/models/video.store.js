const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      default: '',
      trim: true,
    },
    duration: {
      type: String,
      default: '0:00',
    },
    author: {
      type: String,
      default: 'Unknown',
      trim: true,
    },
    views: {
      type: String,
      default: '0 views',
    },
    category: {
      type: String,
      trim: true,
    },
    country: {
      type: String, // Can be "All" or a specific country name like "Australia"
      required: true,
      trim: true,
      index: true
    },
    featured: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model('Video', videoSchema);

function databaseIsConnected() {
  return mongoose.connection.readyState === 1;
}

async function findActive(countryFilter) {
  if (!databaseIsConnected()) {
    return []; // Return empty if no DB connection
  }

  const query = { active: true };
  if (countryFilter && countryFilter !== 'All') {
    query.country = countryFilter;
  }
  
  return Video.find(query).sort({ createdAt: -1 });
}

module.exports = {
  Video,
  findActive,
};
