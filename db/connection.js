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
    console.log(`Connected to the company database.`)
);

module.exports = db;