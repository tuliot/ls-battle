// Required modules
var bodyParser = require('body-parser');
var shortid = require('shortid');
  // , logger      = require('./../models/logger');

exports.log = function(req, res, next) {
  process.env.transid = shortid.generate();
  var bodyString = JSON.stringify(req.body);
  console.log('event=%s path="%s" host="%s" ip="%s" url="%s" body=%s', req.method, req.path, req.hostname, req.ip, req.originalUrl, bodyString);
  next();
};

exports.validateContentType = function(req, res, next) {
	if (req.method !== 'GET' && req.get('Content-Type') !== 'application/json') {
    console.log('event=InvalidContent status=406 msg="Invalid content-type"');
    res.send(406, 'Provide correct content-type. Use application/json');
    res.end();
    return;
	}

	next();
};

exports.json = bodyParser.json;
exports.urlencoded = bodyParser.urlencoded;
