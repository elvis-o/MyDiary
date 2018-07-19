var express = require('express');

var app = express();

var entries = [
	{id: 1, title: "My first day at work", details : "My first day at work ... more details here"},
	{id: 2, title: "Second day at work", details : "Second day at work ... more details here"}
];

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.listen(3000);
console.log('Node development server started on port 3000');



//api to get all entries
app.get('/api/v1/entries', function(req, res){
	res.json(entries);
});




//api to get entries by id
app.get('/api/v1/entries/:entryId', function(req, res){
	var result = {};

	console.log(req.params.entryId)
	entries.forEach(function(entry){
		if(entry.id == req.params.entryId){
			result = entry;
		}
	});
	
	res.json(result);
});



//dont forget to require the response-body node module
app.post('/api/v1/entries', urlencodedParser, function(req, res){
	if(req.body.id !=="" && req.body.title !=="" && req.body.details !==""){
		entries.push(req.body);
		res.json(entries);
	}else{
		res.json({status: "failed", message: "Some fields cannot be left empty"});
	}
});




//dont forget to require the response-body node module
app.put('/api/v1/entries/:entryId', urlencodedParser , function(req, res){

	entries.forEach(function(entry){
		if(entry.id == req.params.entryId){
			entry.title = req.body.title;
			entry.details = req.body.details;
		}
	});

	res.json(entries);
});





