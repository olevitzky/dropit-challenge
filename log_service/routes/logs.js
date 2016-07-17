var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET all coordinates listing. */
router.get('/', function(req, res, next) {
  models.LogMessage.findAll().then(function(logs) {
    res.send({ logMessages: logs });
  }).catch(function(err) {
    res.status(500).send({error: "Something went wrong here. Please try again"});
  });
});

/* POST create a new LogMessage. */
router.post('/', function(req, res, next) {
  let severity = req.body.severity;
  let content = req.body.content;

  if (!severity || !content) {
    res.status(400).send({error: "Severity & content must be passed"});
  } else {
    models.LogMessage.create({
      severity: severity,
      content: content
    }).then(function(logMessage) {
      res.json(logMessage);
    });
  }
});

/* GET data for existing LogMessage. */
router.get('/:id', function(req, res, next) {
  models.LogMessage.find({
    where: {
      id: req.params.id
    }
  }).then(function(logMessage) {
    res.send(logMessage);
  }).catch(function(err) {
    res.status(500).send({error: "Something went wrong here. Please try again"});
  });
});

module.exports = router;
