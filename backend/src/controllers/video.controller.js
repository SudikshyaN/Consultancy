const { Video, findActive } = require('../models/video.store');

exports.getVideos = async (req, res, next) => {
  try {
    const { country } = req.query; require('fs').appendFileSync('video_requests.log', new Date().toISOString() + ' GET /api/videos country=' + country + '\n');
    const videos = await findActive(country);
    res.json(videos);
  } catch (error) {
    next(error);
  }
};

exports.createVideo = async (req, res, next) => {
  try {
    const { title, url, thumbnailUrl, duration, author, views, category, country, featured } = req.body;
    
    const newVideo = new Video({
      title,
      url,
      thumbnailUrl,
      duration,
      author,
      views,
      category,
      country,
      featured
    });
    
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    next(error);
  }
};

exports.updateVideo = async (req, res, next) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after', runValidators: true }
    );
    
    if (!updatedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    res.json(updatedVideo);
  } catch (error) {
    next(error);
  }
};

exports.deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    next(error);
  }
};
