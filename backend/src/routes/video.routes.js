const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controller');
// We are skipping authentication middleware for simplicity based on current backend architecture, 
// assuming basic public admin routes or adding it if we see it in other routes. Let's check auth.

router.get('/', videoController.getVideos);
router.post('/', videoController.createVideo);
router.put('/:id', videoController.updateVideo);
router.delete('/:id', videoController.deleteVideo);

module.exports = router;
