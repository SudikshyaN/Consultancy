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

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    authorMetadata: {
      status: String,
      degree: String,
      university: String,
      location: String,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [String],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [commentSchema],
  },
  { timestamps: true }
);

const CommunityPost = mongoose.model('CommunityPost', postSchema);

async function findAll(tag) {
  const query = tag && tag !== 'All posts' ? { tags: tag } : {};
  return CommunityPost.find(query)
    .populate('author', 'name email')
    .populate('comments.author', 'name')
    .sort({ createdAt: -1 });
}

async function create(data) {
  return CommunityPost.create(data);
}

async function toggleLike(postId, userId) {
  const post = await CommunityPost.findById(postId);
  if (!post) return null;

  const index = post.likes.indexOf(userId);
  if (index === -1) {
    post.likes.push(userId);
  } else {
    post.likes.splice(index, 1);
  }

  return post.save();
}

async function addComment(postId, commentData) {
  return CommunityPost.findByIdAndUpdate(
    postId,
    { $push: { comments: commentData } },
    { new: true }
  ).populate('comments.author', 'name');
}

module.exports = {
  CommunityPost,
  findAll,
  create,
  toggleLike,
  addComment,
};
