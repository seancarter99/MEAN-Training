const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; // The same as above

// Use a schema to create a model. Enforces the data to hold a certain form
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: String,
    actors: [{
        name: {
            // Because of this, I can add additional details to my object validation
            type: String,
            required: [true, 'Actor must have name'] // false by default
        },
        dob: Date // DOB is currently optional
    }],
    genre: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        validate: [year => year >= 1700, 'Release Year must be after 1700 AD']
    },
    imageUrl: String
});

//                       model name, schema,       collection name
const Movie = mongoose.model('Movie', movieSchema, 'Movies');

// We will use the Movie model to create documents for the Movies collection

// This allows us to say const Movie = require('./Movie.model.js'); in another file to use our model
module.exports = Movie;