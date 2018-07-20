var dataSource = require('./data-source.js');
var entries = dataSource.entries;

var sendJSONResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


getAllEntries = function(req, res) {
    sendJSONResponse(res, 200, entries);
};

getEntryById = function(req, res) {
  if(req.params.entryId ==""){
    sendJSONResponse(res, 200, {status: "failed", message: "Please supply an entryId"});
  }else{
    entries.forEach(function(entry){
      if(entry.id == req.params.entryId){
        sendJSONResponse(res, 200, {status: "success", message: "Entry Retrieved", entry: entry});
      }
    });
  }
  sendJSONResponse(res, 200, {status: "failed", message: "Invalid entryId"});
};




module.exports = {
  getAllEntries: getAllEntries,
  getEntryById : getEntryById
};
