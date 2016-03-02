var express = require('express');
var router = express.Router();
var Contestant = require('./../models/contestant.js');

// Create contestants
router.post('/', function(req, res) {

  var body = req.body;

  // If its not valid, then return an error
  if (!Contestant.isValidModel(body)){
    console.log('not valid ' + body);
    res.send(new Error('Contestant is not valid'));
    return;
  };

  // Create
  var contestant = new Contestant(body);

  // Save
  contestant.save(function(err, contestant) {
    if (err) return console.error(err);
    console.dir(contestant);
  });

  // Respond
  res.send('Created contestant' + contestant.name);

});

// Get all contestants
router.get('/', function(req, res) {

  Contestant.find({}, function(err, contestants) {
    res.send(contestants);
  });

});

// Get contestant by id
router.get('/:id', function(req, res) {
  res.send('Get contestant with id');
});

// Update contestant
router.put('/:id', function(req, res) {
  res.send('Update contestant');
});

module.exports = router;
