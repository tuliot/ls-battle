var express = require('express');
var router = express.Router();
var Contestant = require('./../models/contestant.js');
var twitterStream = require('./../twitterStream.js');

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
    if (err) return res.send(err);
    console.dir(contestant);
  });

  // Track this user
  twitterStream.track(contestant.hashtag);

  // Respond
  res.send(contestant);

});

// Get all contestants
router.get('/', function(req, res) {

  Contestant.find({}, function(err, contestants) {
    res.send(contestants);
  });

});

// Get contestant by id
router.get('/:id', function(req, res) {

  Contestant.findById(req.params.id, function(err, contestant) {
    res.send(contestant);
    return;
  });

});

// Update a contestant by id
router.put('/:id', function(req, res) {
  var body = req.body;

  Contestant.findById(req.params.id, function(err, contestant) {

    for (var key in body) {
      contestant[key] = body[key];
    }

    // Save
    contestant.save(function(err, savedContestant) {
      if (err) return res.send(err);

      res.send(savedContestant);
    });
  });
});

module.exports = router;
