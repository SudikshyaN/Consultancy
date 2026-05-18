const mongoose = require('mongoose');

const sopSubmissionSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    formData: {
      processName: String,
      department: String,
      goal: String,
      audience: String,
      roles: String,
      tools: String,
      steps: String,
      standards: String,
      risks: String,
    },
    content: {
      type: String,
      required: true,
    },
    aiReview: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const SopSubmission = mongoose.model('SopSubmission', sopSubmissionSchema);

async function createSubmission(data) {
  return SopSubmission.create(data);
}

async function listSubmissions() {
  return SopSubmission.find()
    .populate('author', 'name email')
    .sort({ createdAt: -1 })
    .limit(30)
    .lean();
}

module.exports = {
  SopSubmission,
  createSubmission,
  listSubmissions,
};
