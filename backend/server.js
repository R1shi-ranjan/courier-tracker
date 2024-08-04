// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const bodyParser = require('body-parser');
// // // // const cors = require('cors');

// // // // const app = express();
// // // // app.use(bodyParser.json());

// // // // // Configure CORS
// // // // const corsOptions = {
// // // //   origin: 'http://localhost:3000', // Replace with your frontend URL
// // // //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// // // //   allowedHeaders: ['Content-Type', 'Authorization'],
// // // // };
// // // // app.use(cors(corsOptions));

// // // // mongoose.connect('mongodb://localhost:27017/courier-tracking', {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // })
// // // // .then(() => console.log('Connected to MongoDB'))
// // // // .catch(err => console.error('Could not connect to MongoDB...', err));

// // // // const trackingSchema = new mongoose.Schema({
// // // //   trackingNumber: String,
// // // //   status: String,
// // // //   location: String,
// // // // });

// // // // const Tracking = mongoose.model('Tracking', trackingSchema);

// // // // app.post('/admin', (req, res) => {
// // // //   const { username, password } = req.body;
// // // //   if (!username || !password) {
// // // //     return res.status(400).send('Username and password are required');
// // // //   }
// // // //   if (username === 'admin' && password === 'password') {
// // // //     return res.status(200).send('Login successful');
// // // //   }
// // // //   res.status(401).send('Login failed');
// // // // });

// // // // app.post('/api/tracking', async (req, res) => {
// // // //   const { trackingNumber, status, location } = req.body;
// // // //   const tracking = new Tracking({ trackingNumber, status, location });
// // // //   try {
// // // //     await tracking.save();
// // // //     res.status(201).send('Tracking information added');
// // // //   } catch (error) {
// // // //     res.status(500).send('Error adding tracking information');
// // // //   }
// // // // });

// // // // app.put('/api/tracking/:trackingNumber', async (req, res) => {
// // // //   const { trackingNumber } = req.params;
// // // //   const { status, location } = req.body;
// // // //   try {
// // // //     const tracking = await Tracking.findOneAndUpdate(
// // // //       { trackingNumber },
// // // //       { status, location },
// // // //       { new: true }
// // // //     );
// // // //     if (tracking) {
// // // //       res.send('Tracking information updated');
// // // //     } else {
// // // //       res.status(404).send('Tracking not found');
// // // //     }
// // // //   } catch (error) {
// // // //     res.status(500).send('Error updating tracking information');
// // // //   }
// // // // });

// // // // app.delete('/api/tracking/:trackingNumber', async (req, res) => {
// // // //   const { trackingNumber } = req.params;
// // // //   try {
// // // //     const tracking = await Tracking.findOneAndDelete({ trackingNumber });
// // // //     if (tracking) {
// // // //       res.send('Tracking information deleted');
// // // //     } else {
// // // //       res.status(404).send('Tracking not found');
// // // //     }
// // // //   } catch (error) {
// // // //     res.status(500).send('Error deleting tracking information');
// // // //   }
// // // // });

// // // // app.get('/api/track/:trackingNumber', async (req, res) => {
// // // //   try {
// // // //     const tracking = await Tracking.findOne({ trackingNumber: req.params.trackingNumber });
// // // //     if (!tracking) {
// // // //       return res.status(404).send('Tracking information not found');
// // // //     }
// // // //     res.json(tracking);
// // // //   } catch (error) {
// // // //     res.status(500).send('Server error');
// // // //   }
// // // // });

// // // // app.listen(5000, () => console.log('Server running on port 5000'));


// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const bodyParser = require('body-parser');
// // // const cors = require('cors');

// // // const app = express();
// // // app.use(bodyParser.json());
// // // app.use(cors(
    
// // // ));

// // // mongoose.connect('mongodb://localhost:27017/courier-tracking', {
// // //  // useNewUrlParser: true,
// // //  // useUnifiedTopology: true,
// // // })
// // // .then(() => console.log('Connected to MongoDB'))
// // // .catch(err => console.error('Could not connect to MongoDB...', err));

// // // const trackingSchema = new mongoose.Schema({
// // //   trackingNumber: String,
// // //   status: String,
// // //   location: String
// // // });

// // // const Tracking = mongoose.model('Tracking', trackingSchema);

// // // app.post('/admin', (req, res) => {
// // //   const { username, password } = req.body;
// // //   if (!username || !password) {
// // //     return res.status(400).send('Username and password are required');
// // //   }
// // //   if (username === 'admin' && password === 'password') {
// // //     return res.status(200).send('Login successful');
// // //   }
// // //   res.status(401).send('Login failed');
// // // });

// // // app.post('/api/tracking', async (req, res) => {
// // //   const { trackingNumber, status, location } = req.body;
// // //   const tracking = new Tracking({ trackingNumber, status, location });
// // //   try {
// // //     await tracking.save();
// // //     res.status(201).send('Tracking information added');
// // //   } catch (error) {
// // //     res.status(500).send('Error adding tracking information');
// // //   }
// // // });

// // // app.put('/api/tracking/:trackingNumber', async (req, res) => {
// // //   const { trackingNumber } = req.params;
// // //   const { status, location } = req.body;
// // //   try {
// // //     const tracking = await Tracking.findOneAndUpdate(
// // //       { trackingNumber },
// // //       { status, location },
// // //       { new: true }
// // //     );
// // //     if (tracking) {
// // //       res.send('Tracking information updated');
// // //     } else {
// // //       res.status(404).send('Tracking not found');
// // //     }
// // //   } catch (error) {
// // //     res.status(500).send('Error updating tracking information');
// // //   }
// // // });

// // // app.delete('/api/tracking/:trackingNumber', async (req, res) => {
// // //     const { trackingNumber } = req.params;
// // //     try {
// // //       const tracking = await Tracking.findOneAndDelete({ trackingNumber });
// // //       if (tracking) {
// // //         res.send('Tracking information deleted');
// // //       } else {
// // //         res.status(404).send('Tracking not found');
// // //       }
// // //     } catch (error) {
// // //       res.status(500).send('Error deleting tracking information');
// // //     }
// // //   });


// // //   app.get('/api/track/:trackingNumber', async (req, res) => {
// // //     try {
// // //       const tracking = await Tracking.findOne({ trackingNumber: req.params.trackingNumber });
// // //       if (!tracking) {
// // //         return res.status(404).send('Tracking information not found');
// // //       }
// // //       res.json(tracking);
// // //     } catch (error) {
// // //       res.status(500).send('Server error');
// // //     }
// // //   });


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('./models/User'); // Update path if needed

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/courier-tracking', {
//   //useNewUrlParser: true,
//   //useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Could not connect to MongoDB...', err));

// const trackingSchema = new mongoose.Schema({
//   trackingNumber: String,
//   status: String,
//   location: String
// });

// const Tracking = mongoose.model('Tracking', trackingSchema);

// // Login route for admin and user
// app.post('/login', async (req, res) => {
//     const { username, password, role } = req.body;
  
//     if (!username || !password || !role) {
//       return res.status(400).json({ message: 'Username, password, and role are required' });
//     }
  
//     try {
//       console.log(`Attempting login for username: ${username} and role: ${role}`);
      
//       const user = await User.findOne({ username, role });
//       if (!user) {
//         console.log('User not found');
//         return res.status(401).json({ message: 'Incorrect username or role' });
//       }
  
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         console.log('Password mismatch');
//         return res.status(401).json({ message: 'Incorrect password' });
//       }
  
//       const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: '1h' });
//       res.status(200).json({ token });
  
//     } catch (error) {
//       console.error('Login error:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
  

// app.post('/api/tracking', async (req, res) => {
//   const { trackingNumber, status, location } = req.body;
//   const tracking = new Tracking({ trackingNumber, status, location });
//   try {
//     await tracking.save();
//     res.status(201).send('Tracking information added');
//   } catch (error) {
//     res.status(500).send('Error adding tracking information');
//   }
// });

// app.put('/api/tracking/:trackingNumber', async (req, res) => {
//   const { trackingNumber } = req.params;
//   const { status, location } = req.body;
//   try {
//     const tracking = await Tracking.findOneAndUpdate(
//       { trackingNumber },
//       { status, location },
//       { new: true }
//     );
//     if (tracking) {
//       res.send('Tracking information updated');
//     } else {
//       res.status(404).send('Tracking not found');
//     }
//   } catch (error) {
//     res.status(500).send('Error updating tracking information');
//   }
// });

// app.delete('/api/tracking/:trackingNumber', async (req, res) => {
//   const { trackingNumber } = req.params;
//   try {
//     const tracking = await Tracking.findOneAndDelete({ trackingNumber });
//     if (tracking) {
//       res.send('Tracking information deleted');
//     } else {
//       res.status(404).send('Tracking not found');
//     }
//   } catch (error) {
//     res.status(500).send('Error deleting tracking information');
//   }
// });

// app.get('/api/track/:trackingNumber', async (req, res) => {
//   try {
//     const tracking = await Tracking.findOne({ trackingNumber: req.params.trackingNumber });
//     if (!tracking) {
//       return res.status(404).send('Tracking information not found');
//     }
//     res.json(tracking);
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// });

// app.listen(5000, () => console.log('Server running on port 5000'));


// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');
// // const User = require('./models/User'); // Update path if needed

// // const app = express();
// // app.use(bodyParser.json());
// // app.use(cors());

// // mongoose.connect('mongodb://localhost:27017/courier-tracking', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log('Connected to MongoDB'))
// // .catch(err => console.error('Could not connect to MongoDB...', err));

// // const trackingSchema = new mongoose.Schema({
// //   trackingNumber: String,
// //   status: String,
// //   location: String
// // });

// // const Tracking = mongoose.model('Tracking', trackingSchema);

// // // Login route for admin and user
// // app.post('/login', async (req, res) => {
// //   const { username, password, role } = req.body;

// //   if (!username || !password || !role) {
// //     return res.status(400).json({ message: 'Username, password, and role are required' });
// //   }

// //   try {
// //     const user = await User.findOne({ username, role });
// //     if (!user) {
// //       return res.status(401).json({ message: 'Incorrect username or role' });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(401).json({ message: 'Incorrect password' });
// //     }

// //     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: '1h' });
// //     res.status(200).json({ token });

// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // app.post('/api/tracking', async (req, res) => {
// //   const { trackingNumber, status, location } = req.body;
// //   const tracking = new Tracking({ trackingNumber, status, location });
// //   try {
// //     await tracking.save();
// //     res.status(201).send('Tracking information added');
// //   } catch (error) {
// //     res.status(500).send('Error adding tracking information');
// //   }
// // });

// // app.put('/api/tracking/:trackingNumber', async (req, res) => {
// //   const { trackingNumber } = req.params;
// //   const { status, location } = req.body;
// //   try {
// //     const tracking = await Tracking.findOneAndUpdate(
// //       { trackingNumber },
// //       { status, location },
// //       { new: true }
// //     );
// //     if (tracking) {
// //       res.send('Tracking information updated');
// //     } else {
// //       res.status(404).send('Tracking not found');
// //     }
// //   } catch (error) {
// //     res.status(500).send('Error updating tracking information');
// //   }
// // });

// // app.get('/', (req, res) => {
// //     res.send('Server is up and running');
// //   });
  

// // app.delete('/api/tracking/:trackingNumber', async (req, res) => {
// //   const { trackingNumber } = req.params;
// //   try {
// //     const tracking = await Tracking.findOneAndDelete({ trackingNumber });
// //     if (tracking) {
// //       res.send('Tracking information deleted');
// //     } else {
// //       res.status(404).send('Tracking not found');
// //     }
// //   } catch (error) {
// //     res.status(500).send('Error deleting tracking information');
// //   }
// // });

// // app.get('/api/track/:trackingNumber', async (req, res) => {
// //   try {
// //     const tracking = await Tracking.findOne({ trackingNumber: req.params.trackingNumber });
// //     if (!tracking) {
// //       return res.status(404).send('Tracking information not found');
// //     }
// //     res.json(tracking);
// //   } catch (error) {
// //     res.status(500).send('Server error');
// //   }
// // });

// // app.listen(5000, () => console.log('Server running on port 5000'));
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Update path if needed

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/courier-tracking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const trackingSchema = new mongoose.Schema({
  trackingNumber: String,
  status: String,
  location: String
});

const Tracking = mongoose.model('Tracking', trackingSchema);

// Login route for admin and user
// app.post('/login', (req, res) => {
//     const { username, password, role } = req.body;
    
//     console.log('Received login data:', { username, password, role });
  
//     if (!username || !password || !role) {
//       return res.status(400).json({ message: 'Username, password, and role are required' });
//     }
  
//     // Validate username, password, and role combination
//     if (username === 'admin' && password === 'password' && role === 'admin') {
//       return res.status(200).json({ message: 'Login successful' });
//     } else if (username === 'user' && password === 'password' && role === 'user') {
//       return res.status(200).json({ message: 'Login successful' });
//     }
  
//     res.status(401).json({ message: 'Incorrect username or role' });
//   });

app.post('/login', (req, res) => {
    const { username, password, role } = req.body;
  
    console.log('Received login data:', { username, password, role });
  
    if (!username || !password || !role) {
      return res.status(400).json({ message: 'Username, password, and role are required' });
    }
  
    // Validate username, password, and role combination
    if ((username === 'admin' && password === 'password' && role === 'admin') ||
        (username === 'admin' && password === 'password' && role === 'user')) {
      return res.status(200).json({ message: 'Login successful' });
    } else if (username === 'user' && password === 'password' && role === 'user') {
      return res.status(200).json({ message: 'Login successful' });
    }
  
    res.status(401).json({ message: 'Incorrect username or role' });
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
