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

// Insert demo content data
const insertDemoContent = () => {
    const demoData = [
        {
            title: "Sample Title",
            description: "Sample Description",
            genre: "Drama",
            upload_date: "2024-11-01",
            status: "Published",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: null,
            addedBy: "John Doe",
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            description: "Story of a boy who lives with his uncle and aunt in Surrey...",
            genre: "Fantasy",
            upload_date: "2024-11-01",
            status: "Published",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: null,
            addedBy: "John Doe",
        },
        {
            title: "Breaking News",
            description: "A fast-paced drama covering current events.",
            genre: "Drama",
            upload_date: "2024-11-01",
            status: "Published",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: null,
            addedBy: "John Doe",
        },
        {
            title: "Stand-Up Comedy",
            description: "A hilarious stand-up performance by a top comedian from Mexico.",
            genre: "Comedy",
            upload_date: "2024-11-19",
            status: "Published",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: "John Doe",
            addedBy: "John Doe",
        },
        {
            title: "Mystery of the Forest",
            description: "A suspense thriller set in a dense forest.",
            genre: "Thriller",
            upload_date: "2024-11-03",
            status: "Draft",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: null,
            addedBy: "John Doe",
        },
        {
            title: "Cooking Masterclass",
            description: "Learn top recipes from world-renowned chefs.",
            genre: "Documentary",
            upload_date: "2024-11-04",
            status: "Published",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: null,
            addedBy: "John Doe",
        },
        {
            title: "Wildlife Adventures",
            description: "Explore the wilderness and its majestic creatures. Only on Animal Planet!",
            genre: "Adventure",
            upload_date: null,
            status: "Draft",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: "John Doe",
            addedBy: "John Doe",
        },
        {
            title: "Mind Benders",
            description: "A mind-bending sci-fi journey through space and time.",
            genre: "Sci-Fi",
            upload_date: "2024-11-06",
            status: "Published",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: null,
            addedBy: "John Doe",
        },
        {
            title: "Around the World",
            description: "Travel series visiting exotic locations.",
            genre: "Travel",
            upload_date: "2024-11-07",
            status: "Draft",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: null,
            addedBy: "John Doe",
        },
        {
            title: "History Uncovered",
            description: "Documentary revealing lesser-known historical events.",
            genre: "History",
            upload_date: "2024-11-08",
            status: "Published",
            thumbnail: "/assets/thumbnail.jpeg",
            updatedBy: null,
            addedBy: "John Doe",
        },
    ];

    db.get(`SELECT COUNT(*) AS count FROM content`, (err, row) => {
        if (row && row.count === 0) {
            const insertStmt = db.prepare(
                `INSERT INTO content (title, description, genre, upload_date, status, thumbnail, updatedBy, addedBy) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
            );
            demoData.forEach((content) => {
                insertStmt.run(
                    content.title,
                    content.description,
                    content.genre,
                    content.upload_date,
                    content.status,
                    content.thumbnail,
                    content.updatedBy,
                    content.addedBy
                );
            });
            insertStmt.finalize();
            console.log("Demo content data inserted into the content table.");
        } else {
            console.log("Content table already contains data.");
        }
    });
};

// Create initial admin account
createInitialAdmin();
// Insert demo content
insertDemoContent();

module.exports = db;
