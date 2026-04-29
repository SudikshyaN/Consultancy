const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const universityStore = require('../src/models/university.store');

async function seedUniversities() {
  try {
    await connectDB();
    const result = await universityStore.seedUsaUniversities();

    console.log('USA universities seeded in Atlas.');
    console.log(`Matched: ${result.matchedCount || 0}`);
    console.log(`Modified: ${result.modifiedCount || 0}`);
    console.log(`Inserted: ${result.upsertedCount || 0}`);
  } catch (err) {
    console.error('Failed to seed universities:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedUniversities();
