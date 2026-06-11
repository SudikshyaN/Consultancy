const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const { Video } = require('../src/models/video.store');

const VIDEOS_TO_SEED = [
  {
    title: "Study in USA - Complete Guide",
    url: "https://www.youtube.com/watch?v=ADJmlufUBcA",
    thumbnailUrl: "https://img.youtube.com/vi/ADJmlufUBcA/maxresdefault.jpg",
    category: "Getting Started",
    country: "USA",
    duration: "10:15",
    author: "Consultancy Guide",
    views: "1.2K views"
  },
  {
    title: "USA University Application Tutorial",
    url: "https://www.youtube.com/watch?v=SC1Pei9QBmY",
    thumbnailUrl: "https://img.youtube.com/vi/SC1Pei9QBmY/maxresdefault.jpg",
    category: "Applications",
    country: "USA",
    duration: "15:30",
    author: "Consultancy Guide",
    views: "850 views"
  },
  {
    title: "USA Scholarship Guide",
    url: "https://www.youtube.com/watch?v=yPWZEsYWjzY",
    thumbnailUrl: "https://img.youtube.com/vi/yPWZEsYWjzY/maxresdefault.jpg",
    category: "Scholarships",
    country: "USA",
    duration: "12:45",
    author: "Consultancy Guide",
    views: "2.1K views"
  },
  {
    title: "F1 Visa Interview Questions",
    url: "https://www.youtube.com/watch?v=AawvmopGZWA",
    thumbnailUrl: "https://img.youtube.com/vi/AawvmopGZWA/maxresdefault.jpg",
    category: "Visa",
    country: "USA",
    duration: "18:20",
    author: "Consultancy Guide",
    views: "3.4K views"
  },
  {
    title: "OPT & Jobs After Graduation",
    url: "https://www.youtube.com/watch?v=VpVWByedxJw",
    thumbnailUrl: "https://img.youtube.com/vi/VpVWByedxJw/maxresdefault.jpg",
    category: "Career",
    country: "USA",
    duration: "14:10",
    author: "Consultancy Guide",
    views: "980 views"
  }
];

async function seedVideos() {
  try {
    await connectDB();
    
    for (const item of VIDEOS_TO_SEED) {
      // Check if video already exists by url
      const existing = await Video.findOne({ url: item.url });
      if (!existing) {
        const video = new Video(item);
        await video.save();
        console.log(`Seeded video: ${item.title}`);
      } else {
        console.log(`Video already exists: ${item.title}`);
      }
    }
    console.log('Video seeding complete.');
  } catch (err) {
    console.error('Failed to seed videos:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedVideos();
