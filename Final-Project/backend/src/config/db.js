const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env');

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is missing. Add your MongoDB Atlas connection string to backend/.env');
  }

  mongoose.set('strictQuery', true);

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

    throw err;
  }

  console.log(`MongoDB connected: ${connection.connection.host}`);
  return connection;
}

module.exports = connectDB;
