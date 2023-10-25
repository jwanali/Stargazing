const express = require('express');
const axios = require('axios');
const app = express();
const db = require('../db/connection');
const ENV = require('./environment');

app.get('/users', (req, res) => {
  // Execute a database query to retrieve data from the "users" table
  db.query('SELECT * FROM users')
    .then((data) => {
      // Send the retrieved data as a JSON response
      res.json(data.rows);
      
      console.log('Data from the "users" table:', data.rows);
    })
    .catch((err) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    });
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});