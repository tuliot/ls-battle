var express = require('express');
var router = express.Router();

// Create contestants
router.post('/', function(req, res) {
  res.send('Create contestants');
});

// Get all contestants
router.get('/', function(req, res) {
  res.send('Get all contestants');
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
