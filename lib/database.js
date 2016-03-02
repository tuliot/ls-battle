// Mongo DB
var mongoose = require('mongoose');
var mongoUristring = 'mongodb://localhost/local';
var contestantModel = require('./models/contestant.js');

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(mongoUristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + mongoUristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + mongoUristring);
  }
});

mongoose.getContestants = function(callback) {
  var contestants = [];

  contestantModel.find({}, function(err, contestants) {
    callback(contestants);
    return;
  });

  return;
};

mongoose.getHashtags = function(callback) {
  // Get the contestants
  var contestants = mongoose.getContestants(function(contestants) {
    var hashtags = [];

    // For each contestant, push the hashtag to hashtags
    contestants.forEach(function(contestant) {
      hashtags.push(contestant.hashtag);
    });

    // Return hashtag Array
    callback(hashtags);
  });

  return;
};

module.exports = mongoose;
