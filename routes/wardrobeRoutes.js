const express = require('express');
const router = express.Router();
const { uploadWardrobeItem } = require('../controllers/wardrobeController');

// Upload wardrobe item
router.post('/upload', uploadWardrobeItem);

module.exports = router;
