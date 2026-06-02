const destinationStore = require('../models/destination.store');

async function listDestinations(req, res, next) {
  try {
    const destinations = await destinationStore.findActive();

    return res.json({ destinations });
  } catch (err) {
    return next(err);
  }
}

async function getDestinationBySlug(req, res, next) {
  try {
    const { slug } = req.params;
    const destination = await destinationStore.Destination.findOne({ slug, active: true });

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    return res.json({ destination });
  } catch (err) {
    return next(err);
  }
}

async function updateDestination(req, res, next) {
  try {
    const { id } = req.params;
    const update = req.body;

    const destination = await destinationStore.Destination.findByIdAndUpdate(
      id,
      { $set: update },
      { returnDocument: 'after' }
    );

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    return res.json({ destination });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  listDestinations,
  getDestinationBySlug,
  updateDestination,
};
