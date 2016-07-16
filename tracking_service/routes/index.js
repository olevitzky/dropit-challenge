var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET last added coordinates */
router.get('/latest', function(req, res, next) {
  models.Coordinate.findOne({
    order: 'id DESC'
  }).then(function(coord) {
    res.send(coord);
  }).catch(function(err) {
    res.send(500, {error: "Something went wrong here. Please try again"});
  })
});

module.exports = router;
