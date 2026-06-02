const express = require('express');
const universityController = require('../controllers/university.controller');
const { requireAdmin, requireAuth } = require('../middleware/auth.middleware');

const router = express.Router();

// Public (auth only) — used by destination detail page
router.get('/by-country', requireAuth, universityController.listByCountry);

// Recommendations (profile-matched)
router.get('/recommendations', requireAuth, universityController.getRecommendedUniversities);

// Admin-only CRUD
router.get('/admin', requireAuth, requireAdmin, universityController.listUniversities);
router.post('/admin', requireAuth, requireAdmin, universityController.createUniversity);
router.put('/admin/:id', requireAuth, requireAdmin, universityController.updateUniversity);
router.delete('/admin/:id', requireAuth, requireAdmin, universityController.deleteUniversity);

module.exports = router;
