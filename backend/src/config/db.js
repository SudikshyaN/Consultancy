const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env');

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is missing. Add your MongoDB Atlas connection string to backend/.env');
  }

  mongoose.set('strictQuery', true);
  mongoose.set('bufferCommands', false);

  let connection;

  try {
    connection = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });
  } catch (err) {
    if (
      err.message.includes('tlsv1 alert internal error') ||
      err.message.includes('ERR_SSL_TLSV1_ALERT_INTERNAL_ERROR')
    ) {
      throw new Error(
        'MongoDB Atlas TLS handshake failed. Use Node 22 LTS for this project, then check your Atlas Network Access IP allowlist and connection string.'
      );
    }

    if (
      err.message.includes('Could not connect to any servers in your MongoDB Atlas cluster') ||
      err.message.includes('IP that isn\'t whitelisted') ||
      err.message.includes('querySrv') ||
      err.message.includes('ECONNREFUSED') ||
      err.message.includes('ENOTFOUND') ||
      err.message.includes('ETIMEOUT')
    ) {
      throw new Error(
        'MongoDB Atlas connection failed. Add your current IP address to Atlas Network Access, confirm your cluster is running, and verify MONGODB_URI in backend/.env.'
      );
    }

    throw new Error(`MongoDB connection failed: ${err.message}`);
  }

  console.log(`MongoDB connected: ${connection.connection.host}`);
  return connection;
}

module.exports = connectDB;
