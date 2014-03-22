var db = require('./database.js');


//Create a new entry
exports.getList = function(req, res) {
  db.ListEntry.find({},'task', function(err, entries) {
    if (err) {
      console.log(err);
    }

    res.send(entries, 200);

  });
};

exports.createEntry  = function(req, res) {
  var newEntry = db.ListEntry({
    task : req.body.task,
    status : 0
  });

  newEntry.save( function(err) {
    if (err) {
      console.log(err);
      res.end(500);
    }
    else {
      console.log("New Entry Added");
      res.send(201);
    }
  });
};

exports.updateEntry = function(req, res) {
  db.ListEntry.update({status : 1}, function(err) {
    if (err) {
      console.log("Update failed");
      res.send(500);
    }

    res.send(200);
  });
};
