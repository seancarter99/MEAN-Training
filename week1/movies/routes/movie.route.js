// Where I'll create an Express movies router

// const express = require('express');
// const router = express.Router();

const router = require('express').Router();
const { findAllMovies, findMovieById } = require('../controllers/movie.controller.js');

// Write an endpoint that returns ALL movies
// GET /movies

// /movies
router.get('/', async (req, res) => {
    const movies = await findAllMovies();
    
    // res.json is res.send() while also setting the Content-Type to be application/json
    res.json(movies);
});

router.get('/:id', async (req, res) => {
    try {
        // await inside a try will proceed in the try if the Promise resolved
        // This try will assume we found the movie
        const movie = await findMovieById(req.params.id);
        res.json(movie); // Assumes a movie is found
    } catch (err) {
        // If a promise is rejected (or an error thrown), the catch will execute
        // This catch will assume that no movie was found
        res.status(204).json({msg: err}); // Change the status code, and send an empty response
    }
});

// This would apply to GET /movies/movies due to the router already working
// router.get('/movies');

module.exports = router;