const express = require('express');
const router = express.Router();
const communityController = require('../controllers/community.controller');
const { requireAuth } = require('../middleware/auth.middleware');

router.use(requireAuth);

router.get('/', communityController.listPosts);
router.post('/', communityController.createPost);
router.delete('/post/:id', communityController.deletePost);
router.delete('/posts/:id', communityController.deletePost);
router.delete('/:id', communityController.deletePost);
router.put('/post/:id', communityController.editPost);
router.patch('/post/:id', communityController.editPost);
router.put('/posts/:id', communityController.editPost);
router.patch('/posts/:id', communityController.editPost);
router.put('/:id', communityController.editPost);
router.patch('/:id', communityController.editPost);
router.post('/:id/like', communityController.likePost);
router.post('/:id/comment', communityController.commentOnPost);
router.put('/post/:id/comment/:commentId', communityController.editComment);
router.patch('/post/:id/comment/:commentId', communityController.editComment);
router.put('/post/:id/comments/:commentId', communityController.editComment);
router.patch('/post/:id/comments/:commentId', communityController.editComment);
router.put('/posts/:id/comment/:commentId', communityController.editComment);
router.patch('/posts/:id/comment/:commentId', communityController.editComment);
router.put('/posts/:id/comments/:commentId', communityController.editComment);
router.patch('/posts/:id/comments/:commentId', communityController.editComment);
router.put('/:id/comment/:commentId', communityController.editComment);
router.patch('/:id/comment/:commentId', communityController.editComment);
router.put('/:id/comments/:commentId', communityController.editComment);
router.patch('/:id/comments/:commentId', communityController.editComment);

module.exports = router;
