const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const { Video } = require('../src/models/video.store');

const UK_REAL_VIDEOS = [
  {
    title: "Study in the UK - Complete Guide for International Students",
    url: "https://www.youtube.com/watch?v=Mzf9MZzQPo4",
    thumbnailUrl: "https://img.youtube.com/vi/Mzf9MZzQPo4/hqdefault.jpg",
    category: "Getting Started",
    country: "UK",
    duration: "11:40",
    author: "Consultancy Guide",
    views: "1.5K views"
  },
  {
    title: "How to Apply to UK Universities Step by Step",
    url: "https://www.youtube.com/watch?v=lO8TTrhKLyM",
    thumbnailUrl: "https://img.youtube.com/vi/lO8TTrhKLyM/hqdefault.jpg",
    category: "Applications",
    country: "UK",
    duration: "13:10",
    author: "Consultancy Guide",
    views: "920 views"
  },
  {
    title: "UK Scholarships for International Students",
    url: "https://www.youtube.com/watch?v=LeHOF-iULrI",
    thumbnailUrl: "https://img.youtube.com/vi/LeHOF-iULrI/hqdefault.jpg",
    category: "Scholarships",
    country: "UK",
    duration: "10:50",
    author: "Consultancy Guide",
    views: "2.4K views"
  },
  {
    title: "UK Student Visa (CAS & Visa Process Explained)",
    url: "https://www.youtube.com/watch?v=37jx0CBXpe8",
    thumbnailUrl: "https://img.youtube.com/vi/37jx0CBXpe8/hqdefault.jpg",
    category: "Visa",
    country: "UK",
    duration: "16:45",
    author: "Consultancy Guide",
    views: "4.1K views"
  },
  {
    title: "Graduate Route Visa & Jobs in the UK",
    url: "https://www.youtube.com/watch?v=xtvC4sfO3Ls",
    thumbnailUrl: "https://img.youtube.com/vi/xtvC4sfO3Ls/hqdefault.jpg",
    category: "Career",
    country: "UK",
    duration: "12:15",
    author: "Consultancy Guide",
    views: "1.1K views"
  }
];

async function seedRealUkVideos() {
  try {
    await connectDB();
    
    // Delete any UK videos that had the old mock URLs
    const urlsToDelete = [
      "https://www.youtube.com/watch?v=7N6M4R4n7eQ",
      "https://www.youtube.com/watch?v=Q3nG5xvV8iA",
      "https://www.youtube.com/watch?v=6e1tQXl8I6M",
      "https://www.youtube.com/watch?v=1b4m7WmW7fM",
      "https://www.youtube.com/watch?v=8s3m9dM2L7Q"
    ];
    
    const delResult = await Video.deleteMany({ url: { $in: urlsToDelete } });
    console.log(`Deleted ${delResult.deletedCount} old mock UK videos.`);
    
    for (const item of UK_REAL_VIDEOS) {
      // Check if video already exists by url
      const existing = await Video.findOne({ url: item.url });
      if (!existing) {
        const video = new Video(item);
        await video.save();
        console.log(`Seeded real UK video: ${item.title}`);
      } else {
        console.log(`UK Video already exists: ${item.title}`);
      }
    }
    console.log('Real UK Video seeding complete.');
  } catch (err) {
    console.error('Failed to seed real UK videos:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedRealUkVideos();
