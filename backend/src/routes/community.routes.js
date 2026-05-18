const express = require('express');
const router = express.Router();
const communityController = require('../controllers/community.controller');
const { requireAuth } = require('../middleware/auth.middleware');

router.use(requireAuth);

router.get('/', communityController.listPosts);
router.post('/', communityController.createPost);
router.post('/:id/like', communityController.likePost);
router.post('/:id/comment', communityController.commentOnPost);

module.exports = router;
