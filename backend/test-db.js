const mongoose = require('mongoose');
const connectDB = require('./src/config/db');

async function test() {
  mongoose.connection.on('connected', () => console.log('connected event fired'));
  mongoose.connection.on('disconnected', () => console.log('disconnected event fired'));
  mongoose.connection.on('error', (err) => console.log('error event fired', err));

  try {
    const conn = await connectDB();
    console.log(`Ready state after connect: ${mongoose.connection.readyState}`);
    
    // wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Ready state after 5 seconds: ${mongoose.connection.readyState}`);
  } catch (e) {
    console.error('Error connecting', e);
  }
  process.exit(0);
}
test();
