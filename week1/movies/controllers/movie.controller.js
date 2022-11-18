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

const findAllMoviesByGenre = async genre => await Movie.find({genre: { $regex: new RegExp(`^${genre.toLowerCase()}$`, "i") }});

const createMovie = async movieData => {
    // new Movie() // Our Movie class's constructor may be used to create a movie document
    const movie = new Movie(movieData);
    // Can optionally mutate the movie object
    await movie.save(); // Saves the document to the DB ONLY IF all validations are met
    // return Promise.resolve(movie); // Equivalent
    return movie; // Auto wrapped in a Promise due to async
}

const updateMovieById = async (id, movieData) => {
    const updatedMovie = await Movie.findByIdAndUpdate(id, movieData);
    // MongoDB also supports direct object manipulation
    // movie.title = 'I Am Legend';
    // movie.save();
    
    await updatedMovie.save();
    return await Movie.findById(id);
}

const deleteMovieById = async id => {
    await Movie.findByIdAndDelete(id);
}

module.exports = { findAllMovies, findMovieById, createMovie, updateMovieById, deleteMovieById, findAllMoviesByGenre };