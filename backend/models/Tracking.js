const mongoose = require('mongoose');

const TrackingSchema = new mongoose.Schema({
  trackingNumber: { type: String, required: true, unique: true },
  status: { type: String, required: true },
  location: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tracking', TrackingSchema);
