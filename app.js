var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controller.js');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
var apiRoutes = require('./router');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', apiRoutes);

r
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});



app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function(){
    console.log('server is listening on port'+ server.address().port);
});

module.exports = {app:app, server:server};
