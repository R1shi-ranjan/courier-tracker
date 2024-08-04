const Tracking = require('../models/Tracking');

exports.createTracking = async (req, res) => {
  const { trackingNumber, status, location } = req.body;
  const tracking = new Tracking({ trackingNumber, status, location });
  await tracking.save();
  res.status(201).send('Tracking created');
};

exports.updateTracking = async (req, res) => {
  const { id } = req.params;
  const { status, location } = req.body;
  const tracking = await Tracking.findByIdAndUpdate(id, { status, location }, { new: true });
  res.json(tracking);
};

exports.getTracking = async (req, res) => {
  const { trackingNumber } = req.params;
  const tracking = await Tracking.findOne({ trackingNumber });
  if (!tracking) return res.status(404).send('Tracking not found');
  res.json(tracking);
};


exports.deleteTracking = async (req, res) => {
    const { trackingNumber } = req.params;
    const tracking = await Tracking.findOneAndDelete({ trackingNumber });
    if (!tracking) return res.status(404).send('Tracking not found');
    res.send('Tracking deleted');
  };
  