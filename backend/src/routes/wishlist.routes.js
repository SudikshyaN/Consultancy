const express = require('express');
const wishlistController = require('../controllers/wishlist.controller');
const { requireAuth } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/destinations', requireAuth, wishlistController.listSavedDestinations);
router.post('/destinations', requireAuth, wishlistController.addSavedDestination);
router.delete('/destinations/:slug', requireAuth, wishlistController.removeSavedDestination);

module.exports = router;
