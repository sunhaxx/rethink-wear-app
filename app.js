const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const wardrobeRoutes = require('./routes/wardrobeRoutes');
const rentalRoutes = require('./routes/rentalRoutes');
const membershipRoutes = require('./routes/userRoutes'); // Membership routes are part of userRoutes
const uploadRoutes = require('./routes/uploadRoutes'); // New route for photo uploads

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/wardrobe', wardrobeRoutes);
app.use('/api/rentals', rentalRoutes);
app.use('/api/upload', uploadRoutes); // Add the new route

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
