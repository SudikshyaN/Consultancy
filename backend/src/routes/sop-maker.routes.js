const express = require('express');
const sopMakerController = require('../controllers/sop-maker.controller');
const { requireAuth } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(requireAuth);

router.post('/generate', sopMakerController.generateSop);
router.post('/review', sopMakerController.reviewSop);
router.get('/community', sopMakerController.listCommunitySubmissions);
router.post('/community', sopMakerController.submitToCommunity);

module.exports = router;
