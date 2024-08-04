const express = require('express');
const router = express.Router();
const { createTracking, updateTracking, getTracking, deleteTracking } = require('../controllers/trackingController');
const auth = require('../middleware/auth');

router.post('/', auth, createTracking);
router.put('/:id', auth, updateTracking);
router.get('/:trackingNumber', getTracking);
router.delete('/:trackingNumber', auth, deleteTracking);

module.exports = router;
