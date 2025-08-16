const express = require('express');
const router = express.Router();
const { createRental } = require('../controllers/rentalController');

// Create rental
router.post('/', createRental);

module.exports = router;
