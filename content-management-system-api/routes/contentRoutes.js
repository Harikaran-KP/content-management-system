const express = require('express');
const router = express.Router();
const contentModel = require('../models/contentModel');

// Route to get all content
router.get('/', (req, res) => {
    contentModel.getAllContent((err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// Route to create a new content item
router.post('/', (req, res) => {
    const { title, description, genre, uploadDate, status, thumbnail, addedBy } = req.body;
    
    // Validation to ensure required fields are present
    if (!title || !description) {
        return res.status(400).json({ error: 'Missing and/or description!' });
    }

    contentModel.addContent(title, description, genre, uploadDate, status, thumbnail, addedBy, (err, id) => {
        if (err) {
            console.log('Test', req)
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id });
        }
    });
});

// Route to update an existing content item
router.put('/update', (req, res) => {
    const { id, title, description, genre, uploadDate, status, thumbnail, updatedBy, addedBy } = req.body;

    // Validation ID and required fields
    if (!id || !title || !description) {
        return res.status(400).json({ error: 'ID and all required fields must be provided' });
    }

    contentModel.updateContent(id, title, description, genre, uploadDate, status, thumbnail, updatedBy, addedBy, (err, changes) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (changes === 0) {
            res.status(404).json({ error: 'Content not found' });
        } else {
            res.json({ message: 'Content updated' });
        }
    });
});

// Route to delete a content item by ID
router.delete('/delete', (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: "Content ID is required" });
    }

    contentModel.deleteContent(id, (err, changes) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (changes === 0) {
            res.status(404).json({ error: 'Content not found' });
        } else {
            res.json({ message: 'Content deleted' });
        }
    });
});

module.exports = router;
