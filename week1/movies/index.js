const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads up the process.env object with the .env file contents
// dotenv.config(); Only using once

const app = express();
app.use(cors());
app.use(express.json()); // This intercepts any requests with Application/json as the Content-Type and translates it to JS object

// Use a router to break up our app into smaller sections
// Any request that starts with /movies goes to a movies router
// Any request that starts with /actors goes to a actors router

const movieRouter = require('./routes/movie.route.js');
app.use('/movies', movieRouter); // Forwards requests


// Connect to the database
// Connect takes the connection string to connect to MongoDB
// console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch(() => console.error('Connection to MongoDB failed!'))

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}!`);
});