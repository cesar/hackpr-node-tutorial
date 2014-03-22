var mongoose = require('mongoose');

//Setup the URL for the connection
mongoose.connect('mongodb://localhost/list');

//Create a connection
var db = mongoose.connection;

//If there is an error when logging in, print it.
db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  //The database was succesfully connected
  console.log('Connection Successful');
});


//Define the schema for the collection
var listEntrySchema = mongoose.Schema({
  task : String,
  status : Number
});

//Compile the ListEntry Schema into a model, export it.
exports.ListEntry = mongoose.model('ListEntry', listEntrySchema);


