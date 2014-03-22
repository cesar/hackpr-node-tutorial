var express = require('express');
var http = require('http');
var path = require('path');
var list = require('./routes/list');

var app = express();


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

// añadir en app config
app.use(allowCrossDomain);
app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


//GET
app.get('/list', list.getList); //Get all the lists

//POST
app.post('/create-entry', list.createEntry); //Create a new entry in the list

//PUT
app.put('/completeTask/:id', list.updateEntry); //Update the status of the entry



app.listen(app.get('port'), function() {
  console.log('Port 3000 live, and listening!!!');
});
