const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/courier-tracking', {
 // useNewUrlParser: true,
 // useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const trackingSchema = new mongoose.Schema({
  trackingNumber: String,
  status: String,
  location: String
});

const Tracking = mongoose.model('Tracking', trackingSchema);

app.post('/admin', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }
  if (username === 'admin' && password === 'password') {
    return res.status(200).send('Login successful');
  }
  res.status(401).send('Login failed');
});

app.post('/api/tracking', async (req, res) => {
  const { trackingNumber, status, location } = req.body;
  const tracking = new Tracking({ trackingNumber, status, location });
  try {
    await tracking.save();
    res.status(201).send('Tracking information added');
  } catch (error) {
    res.status(500).send('Error adding tracking information');
  }
});

app.put('/api/tracking/:trackingNumber', async (req, res) => {
  const { trackingNumber } = req.params;
  const { status, location } = req.body;
  try {
    const tracking = await Tracking.findOneAndUpdate(
      { trackingNumber },
      { status, location },
      { new: true }
    );
    if (tracking) {
      res.send('Tracking information updated');
    } else {
      res.status(404).send('Tracking not found');
    }
  } catch (error) {
    res.status(500).send('Error updating tracking information');
  }
});

app.delete('/api/tracking/:trackingNumber', async (req, res) => {
    const { trackingNumber } = req.params;
    try {
      const tracking = await Tracking.findOneAndDelete({ trackingNumber });
      if (tracking) {
        res.send('Tracking information deleted');
      } else {
        res.status(404).send('Tracking not found');
      }
    } catch (error) {
      res.status(500).send('Error deleting tracking information');
    }
  });


  app.get('/api/track/:trackingNumber', async (req, res) => {
    try {
      const tracking = await Tracking.findOne({ trackingNumber: req.params.trackingNumber });
      if (!tracking) {
        return res.status(404).send('Tracking information not found');
      }
      res.json(tracking);
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
app.listen(5000, () => console.log('Server running on port 5000'));
