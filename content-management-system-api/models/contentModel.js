const db = require('../database');

// Fetch all content
const getAllContent = (callback) => {
    const query = `SELECT * FROM content`;
    db.all(query, (err, rows) => {
        callback(err, rows);
    });
};

// Add new content
const addContent = (title, description, genre, uploadDate, status, thumbnail, addedBy, callback) => {
    const query = `INSERT INTO content (title, description, genre, upload_date, status, thumbnail, addedBy) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.run(query, [title, description, genre, uploadDate, status, thumbnail, addedBy], function (err) {
        callback(err, this.lastID);
    });
};

// Update content by ID
const updateContent = (id, title, description, genre, uploadDate, status, thumbnail, updatedBy, addedBy, callback) => {
    const query = `
        UPDATE content
        SET title = ?, description = ?, genre = ?, upload_date = ?, status = ?, thumbnail = ?, updatedBy = ?, addedBy = ?
        WHERE id = ?
    `;
    db.run(query, [title, description, genre, uploadDate, status, thumbnail, updatedBy, addedBy, id], function (err) {
        callback(err, this.changes);
    });
};


// Delete content by ID
const deleteContent = (id, callback) => {
    const query = `DELETE FROM content WHERE id = ?`;
    db.run(query, [id], function (err) {
        callback(err, this.changes);
    });
};

module.exports = {
    getAllContent,
    addContent,
    updateContent,
    deleteContent
};
