var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET latest logs message. */
router.get('/latest', function(req, res, next) {
  models.LogMessage.findOne({
    order: 'id DESC'
  }).then(function(logMessage) {
    res.send(logMessage);
  }).catch(function(err) {
    res.status(500).send({error: "Something went wrong here. Please try again"});
  })
});

module.exports = router;
