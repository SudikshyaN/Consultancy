const express = require('express');
const destinationController = require('../controllers/destination.controller');

const router = express.Router();

router.get('/', destinationController.listDestinations);
router.get('/:slug', destinationController.getDestinationBySlug);
router.put('/:id', destinationController.updateDestination);

module.exports = router;
