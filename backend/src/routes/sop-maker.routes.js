const express = require('express');
const sopMakerController = require('../controllers/sop-maker.controller');
const { requireAuth } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(requireAuth);

router.post('/generate', sopMakerController.generateSop);
router.post('/review', sopMakerController.reviewSop);
router.get('/community', sopMakerController.listCommunitySubmissions);
router.post('/community', sopMakerController.submitToCommunity);
router.delete('/community/:id', sopMakerController.deleteSubmission);
router.post('/community/:id/comment', sopMakerController.addComment);
router.delete('/community/:id/comment/:commentId', sopMakerController.deleteComment);

module.exports = router;
