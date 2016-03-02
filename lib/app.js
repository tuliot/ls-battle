var express = require('express');
var middleware = require('./middleware');

var app = express();

// Db
var mongoose = require('./database');

// middleware
app.use(middleware.json());
app.use(middleware.urlencoded({ extended: true }));
app.use(middleware.log);

// routers
var contestantRouter = require(__dirname + '/routers/contestantsRouter.js');

// routes
app.get('/', function(req, res, next) {
  return res.send('Hello World!').end();
});

app.use('/api/v1/admin/contestants', contestantRouter);

module.exports.start = function start(callback) {
  app.listen(8080);
  console.log('Starting server...');
};
