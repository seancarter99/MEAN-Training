// This file will just define a bunch of helper functions that solve specific issues
const Movie = require('../models/Movie.model.js');

//                                     find grabs every document
const findAllMovies = async () => await Movie.find();

const findMovieById = async id => {
    const movie = await Movie.findById(id);
    // Mongoose does NOT throw if it doesn't find a movie. Instead, movie will be null
    if (movie == null) {
        throw `No movie with the id ${id} found.`;
    }
    return movie;
}

module.exports = { findAllMovies, findMovieById };