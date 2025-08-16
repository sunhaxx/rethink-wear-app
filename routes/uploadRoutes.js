const express = require('express');
const multer = require('multer');
const { extractKeywords, findSimilarStyles } = require('../services/styleService');

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('photo'), async (req, res) => {
    try {
        const photoPath = req.file.path;
        const keywords = await extractKeywords(photoPath); // Extract keywords from the photo
        const similarStyles = await findSimilarStyles(keywords); // Find similar styles based on keywords
        res.json({ keywords, similarStyles });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process the photo' });
    }
});

module.exports = router;
