const db = require('../database');
const bcrypt = require('bcryptjs'); // for hashing passwords

const getAdminByEmail = (email, callback) => {
    const query = 'SELECT * FROM admin WHERE email = ?';
    db.get(query, [email], (err, row) => {
        callback(err, row);
    });
};

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = {
    getAdminByEmail,
    comparePassword
};
