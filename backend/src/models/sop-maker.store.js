const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

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
    comments: [commentSchema],
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
    .populate('comments.author', 'name')
    .sort({ createdAt: -1 })
    .limit(30)
    .lean();
}

async function deleteSubmission(submissionId, authorId, isAdmin = false) {
  const query = { _id: submissionId };
  if (!isAdmin) {
    query.author = authorId;
  }
  return SopSubmission.findOneAndDelete(query);
}

async function addComment(submissionId, commentData) {
  return SopSubmission.findByIdAndUpdate(
    submissionId,
    { $push: { comments: commentData } },
    { returnDocument: 'after' }
  ).populate('comments.author', 'name');
}

async function deleteComment(submissionId, commentId, authorId, isAdmin = false) {
  const submission = await SopSubmission.findById(submissionId);
  if (!submission) return null;

  const comment = submission.comments.id(commentId);
  if (!comment) return null;

  if (!isAdmin && comment.author.toString() !== authorId.toString()) {
    return null;
  }

  comment.deleteOne();
  await submission.save();

  return SopSubmission.findById(submissionId).populate('comments.author', 'name');
}

module.exports = {
  SopSubmission,
  createSubmission,
  listSubmissions,
  deleteSubmission,
  addComment,
  deleteComment,
};
