
var mongoose = require('mongoose');

// Contestant Schema
var contestantSchema = new mongoose.Schema({
  name : String,
  hashtag : String,
  voteCount : { type: Number, default: 0 },
  votees : {type: Array, default: []}
});

var model = mongoose.model('Contestants', contestantSchema);

model.isValidModel = function (obj) {

  // Does have a name
  if (!obj.name) {
    console.log('[contestant.isvalidmodel] obj name = ' + obj.name);
    return false;
  }

  // Does have a name
  if (!obj.hashtag){
    console.log('[contestant.isvalidmodel] obj hashtag = ' + obj.hashtag);
    return false;
  }

  return true;
};

module.exports = model;
