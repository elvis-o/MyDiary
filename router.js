var router = require('express').Router();
var controller = require('./controller.js');


router.get('/', controller.indexApp);
router.get('/api/v1/entries', controller.getAllEntries);
router.get('/api/v1/entries/:entryId', controller.getEntryById);
router.post('/api/v1/entries', controller.createNewEntry);
router.put('/api/v1/entries/:entryId', controller.editEntry);

module.exports = router;
