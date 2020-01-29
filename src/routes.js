const express = require('express');
const routes = express.Router();

const JokeController = require('./controllers/jokeController');

routes.get('/joke', JokeController.index);

module.exports = routes;