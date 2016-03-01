var express = require('express');
var middleware = require('./middleware');

var app = express();

// middleware
app.use(middleware.json());
app.use(middleware.urlencoded({ extended: true }));
app.use(middleware.log);

// routes
app.use('/', function(req, res, next) {
  return res.send('Hello World!').end();
});

module.exports.start = function start(callback) {
  app.listen(8080);
  console.log('Starting server...');
};
