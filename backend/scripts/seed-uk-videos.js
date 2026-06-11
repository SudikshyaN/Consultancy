const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const { Video } = require('../src/models/video.store');

const UK_VIDEOS_TO_SEED = [
  {
    title: "Study in the UK - Complete Guide for International Students",
    url: "https://www.youtube.com/watch?v=7N6M4R4n7eQ",
    thumbnailUrl: "https://img.youtube.com/vi/7N6M4R4n7eQ/maxresdefault.jpg",
    category: "Getting Started",
    country: "UK",
    duration: "11:40",
    author: "Consultancy Guide",
    views: "1.5K views"
  },
  {
    title: "How to Apply to UK Universities Step by Step",
    url: "https://www.youtube.com/watch?v=Q3nG5xvV8iA",
    thumbnailUrl: "https://img.youtube.com/vi/Q3nG5xvV8iA/maxresdefault.jpg",
    category: "Applications",
    country: "UK",
    duration: "13:10",
    author: "Consultancy Guide",
    views: "920 views"
  },
  {
    title: "UK Scholarships for International Students",
    url: "https://www.youtube.com/watch?v=6e1tQXl8I6M",
    thumbnailUrl: "https://img.youtube.com/vi/6e1tQXl8I6M/maxresdefault.jpg",
    category: "Scholarships",
    country: "UK",
    duration: "10:50",
    author: "Consultancy Guide",
    views: "2.4K views"
  },
  {
    title: "UK Student Visa (CAS & Visa Process Explained)",
    url: "https://www.youtube.com/watch?v=1b4m7WmW7fM",
    thumbnailUrl: "https://img.youtube.com/vi/1b4m7WmW7fM/maxresdefault.jpg",
    category: "Visa",
    country: "UK",
    duration: "16:45",
    author: "Consultancy Guide",
    views: "4.1K views"
  },
  {
    title: "Graduate Route Visa & Jobs in the UK",
    url: "https://www.youtube.com/watch?v=8s3m9dM2L7Q",
    thumbnailUrl: "https://img.youtube.com/vi/8s3m9dM2L7Q/maxresdefault.jpg",
    category: "Career",
    country: "UK",
    duration: "12:15",
    author: "Consultancy Guide",
    views: "1.1K views"
  }
];

async function seedUkVideos() {
  try {
    await connectDB();
    
    for (const item of UK_VIDEOS_TO_SEED) {
      // Check if video already exists by url
      const existing = await Video.findOne({ url: item.url });
      if (!existing) {
        const video = new Video(item);
        await video.save();
        console.log(`Seeded UK video: ${item.title}`);
      } else {
        console.log(`UK Video already exists: ${item.title}`);
      }
    }
    console.log('UK Video seeding complete.');
  } catch (err) {
    console.error('Failed to seed UK videos:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedUkVideos();
