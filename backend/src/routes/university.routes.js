const express = require('express');
const universityController = require('../controllers/university.controller');
const { requireAdmin, requireAuth } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/recommendations', requireAuth, universityController.getRecommendedUniversities);

router.get('/admin', requireAuth, requireAdmin, universityController.listUniversities);
router.post('/admin', requireAuth, requireAdmin, universityController.createUniversity);
router.put('/admin/:id', requireAuth, requireAdmin, universityController.updateUniversity);
router.delete('/admin/:id', requireAuth, requireAdmin, universityController.deleteUniversity);

module.exports = router;
