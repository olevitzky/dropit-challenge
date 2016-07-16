var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET all coordinates listing. */
router.get('/', function(req, res, next) {
  models.Coordinate.findAll().then(function(coords) {
    res.send({ coordinates: coords });
  }).catch(function(err) {
    res.send(500, {error: "Something went wrong here. Please try again"});
  });
});

/* POST create a new coordinates. */
router.post('/', function(req, res, next) {
  let lat = req.body.lat;
  let lng = req.body.lng;

  if (!lat || !lng) {
    res.send(400, {error: "Lat & lng must be passed"});
  } else {
    models.Coordinate.create({
      lat: lat,
      lng: lng
    }).then(function(coord) {
      res.json(coord);
    });
  }
});

/* GET data for existing coordinate. */
router.get('/:id', function(req, res, next) {
  models.Coordinate.find({
    where: {
      id: req.params.id
    }
  }).then(function(coord) {
    res.send(coord);
  }).catch(function(err) {
    res.send(500, {error: "Something went wrong here. Please try again"});
  });
});


module.exports = router;
