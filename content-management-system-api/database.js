const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');

// Connect to SQLite database
const db = new sqlite3.Database(path.join(__dirname, 'cms.db'), (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Initialize tables
db.serialize(() => {
    // Admin Table
    db.run(`
        CREATE TABLE IF NOT EXISTS admin (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    `);

    // Content Table
    db.run(`
        CREATE TABLE IF NOT EXISTS content (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            genre TEXT,
            upload_date TEXT,
            status TEXT CHECK(status IN ('Published', 'Draft')),
            thumbnail TEXT,
            updatedBy TEXT,
            addedBy TEXT
        )
    `);
});

// Function to create an initial admin account
const createInitialAdmin = () => {
    const email = "admin@example.com";
    const password = "admin123";
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.get(`SELECT * FROM admin WHERE email = ?`, [email], (err, row) => {
        if (!row) {
            db.run(
                `INSERT INTO admin (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
                ["John", "Doe", email, hashedPassword],
                (err) => {
                    if (err) {
                        console.error("Failed to create initial admin", err);
                    } else {
                        console.log("Initial admin created with email:", email);
                    }
                }
            );
        }
    });
};

// Create initial admin account
createInitialAdmin();

module.exports = db;
