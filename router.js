var router = require('express').Router();
var controller = require('./controller.js');


router.get('/', controller.indexApp);
router.get('/v1/entries', controller.getAllEntries);
router.get('/v1/entries/:entryId', controller.getEntryById);
router.post('/v1/entries', controller.createNewEntry);
router.put('/v1/entries/:entryId', controller.editEntry);

module.exports = router;
