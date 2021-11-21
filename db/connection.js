require('dotenv').config();
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: process.env.PASSWORD,
      database: 'company'
    },
);

module.exports = db;