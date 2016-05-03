// getting-started.js
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017/helloworld');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


// if our user.js file is at app/models/user.js
var User = require('./model/user');
  

User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});