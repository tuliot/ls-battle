// Mongo DB
var mongoose = require('mongoose');
var mongoUristring = 'mongodb://localhost/local';

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(mongoUristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + mongoUristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + mongoUristring);
  }
});

module.exports = mongoose;
