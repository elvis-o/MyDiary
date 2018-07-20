var dataSource = require('./data-source.js');
var entries = dataSource.entries;

var sendJSONResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


getAllEntries = function(req, res) {
    sendJSONResponse(res, 200, entries);
};




module.exports = {
  getAllEntries: getAllEntries
};
