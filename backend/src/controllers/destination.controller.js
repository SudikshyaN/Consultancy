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
    const update = { ...req.body };

    // Ensure costBreakdown values are strings and formatted nicely
    if (update.costBreakdown) {
      update.costBreakdown = {
        rent: String(update.costBreakdown.rent !== undefined && update.costBreakdown.rent !== null ? update.costBreakdown.rent : '0').trim(),
        food: String(update.costBreakdown.food !== undefined && update.costBreakdown.food !== null ? update.costBreakdown.food : '0').trim(),
        transport: String(update.costBreakdown.transport !== undefined && update.costBreakdown.transport !== null ? update.costBreakdown.transport : '0').trim(),
        bills: String(update.costBreakdown.bills !== undefined && update.costBreakdown.bills !== null ? update.costBreakdown.bills : '0').trim(),
        personal: String(update.costBreakdown.personal !== undefined && update.costBreakdown.personal !== null ? update.costBreakdown.personal : '0').trim(),
      };
    }

    const destination = await destinationStore.Destination.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true, runValidators: true }
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
