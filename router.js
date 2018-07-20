var router = require('express').Router();
var controller = require('./controller.js');


router.get('/v1/entries', controller.getAllEntries);
router.get('/v1/entries/:entryId', controller.getEntryById);

module.exports = router;
