const express = require('express');
const adminModel = require('../models/adminModel');

const router = express.Router();

// Route to handle login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Func to check if admin exists with the provided email
    adminModel.getAdminByEmail(email, async (err, admin) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        // Pwd match check
        const isMatch = await adminModel.comparePassword(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Login success
        res.json({ message: 'Login successful', admin: { id: admin.id, email: admin.email, name: `${admin.first_name} ${admin.last_name}` } });
    });
});

module.exports = router;
