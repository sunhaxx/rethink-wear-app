const express = require('express');
const router = express.Router();
const { createUser, getUserProfile } = require('../controllers/userController');
const { createMembership, getMembershipDetails } = require('../controllers/membershipController');

// Create user profile
router.post('/', createUser);

// Get user profile
router.get('/:id', getUserProfile);

// Membership routes
router.post('/:id/membership', createMembership);
router.get('/:id/membership', getMembershipDetails);

module.exports = router;
