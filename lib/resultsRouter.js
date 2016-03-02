var resultsRouter = module.exports = require('express').Router();

resultsRouter.get('/', function(req, res) {


  return {
    results: [],
    tweets: []
  };
});
