const communityStore = require('../models/community.store');

async function listPosts(req, res, next) {
  try {
    const { tag } = req.query;
    const posts = await communityStore.findAll(tag);
    return res.json({ posts });
  } catch (err) {
    return next(err);
  }
}

const userStore = require('../models/user.store');

async function createPost(req, res, next) {
  try {
    const { content, tags } = req.body;
    
    const user = await userStore.findById(req.user.sub);
    const profile = user?.profile || {};
    
    const post = await communityStore.create({
      author: req.user.sub,
      content,
      tags,
      authorMetadata: {
        status: profile.university ? 'Alumni' : 'Applying',
        degree: profile.degree || 'Student',
        university: profile.university || '',
        location: profile.city ? `${profile.city}, Nepal` : 'Nepal',
      }
    });
    
    const populatedPost = await post.populate('author', 'name email');
    return res.status(201).json({ message: 'Post created', post: populatedPost });
  } catch (err) {
    return next(err);
  }
}

async function editPost(req, res, next) {
  try {
    const { content, tags } = req.body;
    if (!content || !content.trim()) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const updated = await communityStore.updatePost(
      req.params.id,
      req.user.sub,
      content.trim(),
      tags
    );

    if (!updated) {
      return res.status(404).json({ message: 'Post not found or not authorized' });
    }

    return res.json({ message: 'Post updated', post: updated });
  } catch (err) {
    return next(err);
  }
}

async function deletePost(req, res, next) {
  try {
    const deleted = await communityStore.deletePost(req.params.id, req.user.sub);

    if (!deleted) {
      return res.status(404).json({ message: 'Post not found or not authorized' });
    }

    return res.json({ message: 'Post deleted' });
  } catch (err) {
    return next(err);
  }
}

async function likePost(req, res, next) {
  try {
    const post = await communityStore.toggleLike(req.params.id, req.user.sub);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.json({ message: 'Like toggled', likes: post.likes });
  } catch (err) {
    return next(err);
  }
}

async function commentOnPost(req, res, next) {
  try {
    const { content } = req.body;
    const post = await communityStore.addComment(req.params.id, {
      author: req.user.sub,
      content,
    });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.json({ message: 'Comment added', comments: post.comments });
  } catch (err) {
    return next(err);
  }
}

async function editComment(req, res, next) {
  try {
    const { content } = req.body;
    if (!content || !content.trim()) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const updated = await communityStore.updateComment(
      req.params.id,
      req.params.commentId,
      req.user.sub,
      content.trim()
    );

    if (!updated) {
      return res.status(404).json({ message: 'Comment not found or not authorized' });
    }

    return res.json({ message: 'Comment updated', comments: updated.comments });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  listPosts,
  createPost,
  editPost,
  deletePost,
  likePost,
  commentOnPost,
  editComment,
};
