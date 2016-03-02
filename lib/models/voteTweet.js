
var mongoose = require('mongoose');

// Contestant Schema
var voteTweetSchema = new mongoose.Schema({
  username: String,
  imageURL: String,
  tweetBody: String,
  tweetURL: String,
  tweetId: String,
  hashtag: String,
  voteFor: String,
  createdAt: Date,
});

var model = mongoose.model('VoteTweet', voteTweetSchema);

model.isValidModel = function (obj) {

// Todo: Validation
  return true;
};

module.exports = model;
