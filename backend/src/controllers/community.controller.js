const communityStore = require('../models/community.store');

async function listPosts(req, res, next) {
  try {
    const { tag } = req.query;
    console.log(`[Community] Fetching posts for tag: ${tag || 'All'}`);
    const posts = await communityStore.findAll(tag);
    console.log(`[Community] Found ${posts.length} posts`);
    return res.json({ posts });
  } catch (err) {
    return next(err);
  }
}

const userStore = require('../models/user.store');

async function createPost(req, res, next) {
  try {
    const { content, tags } = req.body;
    console.log(`[Community] Creating post: ${content.substring(0, 20)}...`);
    
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
    
    console.log(`[Community] Post created with ID: ${post._id}`);
    const populatedPost = await post.populate('author', 'name email');
    
    return res.status(201).json({ message: 'Post created', post: populatedPost });
  } catch (err) {
    console.error(`[Community] Create post error:`, err);
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

module.exports = {
  listPosts,
  createPost,
  likePost,
  commentOnPost,
};
