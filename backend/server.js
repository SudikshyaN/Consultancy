const app = require('./src/app');
const connectDB = require('./src/config/db');
const { PORT } = require('./src/config/env');
const destinationStore = require('./src/models/destination.store');
const wishlistStore = require('./src/models/wishlist.store');

async function startServer() {
  let databaseReady = false;

  try {
    await connectDB();
    await destinationStore.findActive();
    await wishlistStore.ensureCollection();
    databaseReady = true;
  } catch (err) {
    console.error('Database connection unavailable:', err.message);
    console.error('Server will still start, but database-backed routes will return 503 until MongoDB connects.');
  }

  app.locals.databaseReady = databaseReady;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
