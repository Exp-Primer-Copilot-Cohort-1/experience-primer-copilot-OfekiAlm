//Create web server 
const express = require('express');
const app = express();
const port = 3000;

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import database
const db = require('./database.js');

// Import routes
const comments = require('./routes/comments.js');

// Use routes
app.use('/comments', comments);

// Start server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});