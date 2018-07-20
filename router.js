var router = require('express').Router();
var controller = require('./controller.js');


router.get('/v1/entries', controller.getAllEntries);


module.exports = router;
