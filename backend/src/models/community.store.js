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
    editedAt: {
      type: Date,
      default: null,
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
    editedAt: {
      type: Date,
      default: null,
    },
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
    { returnDocument: 'after' }
  ).populate('comments.author', 'name');
}

async function updatePost(postId, authorId, content, tags) {
  const post = await CommunityPost.findOne({ _id: postId, author: authorId });
  if (!post) return null;

  post.content = content;
  if (tags !== undefined) post.tags = tags;
  post.editedAt = new Date();

  await post.save();
  return CommunityPost.findById(postId)
    .populate('author', 'name email')
    .populate('comments.author', 'name');
}

async function updateComment(postId, commentId, authorId, content) {
  // Fetch WITHOUT populate so Mongoose saves the raw ObjectId reference correctly
  const post = await CommunityPost.findById(postId);
  if (!post) return null;

  const comment = post.comments.id(commentId);
  if (!comment) return null;

  // Compare raw ObjectId strings — no populate needed
  if (comment.author.toString() !== authorId.toString()) return null;

  comment.content = content;
  comment.editedAt = new Date();

  await post.save();

  // Re-fetch with populate for the response
  return CommunityPost.findById(postId)
    .populate('author', 'name email')
    .populate('comments.author', 'name');
}

module.exports = {
  CommunityPost,
  findAll,
  create,
  toggleLike,
  addComment,
  updatePost,
  updateComment,
};
