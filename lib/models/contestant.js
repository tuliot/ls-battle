
var mongoose = require('mongoose');

// Contestant Schema
var contestantSchema = new mongoose.Schema({
  name : String,
  hashtag : String,
  voteCount : Number
});

module.exports = mongoose.model('Contestants', contestantSchema);;
