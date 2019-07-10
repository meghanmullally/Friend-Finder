// Dependencies 
var express = require('express');
var path = require("path");

// Set up the Express app 
var app = express();

// process.env.PORT (whatever it is on Heroku) or 3000
// if process.env doesn't exist it will be 3000
var PORT = process.env.PORT || 3000;


// basic route that sends the user first to the page 
app.get('/', function(req, res) {
  res.send('hello world')
});


// starts the server to begin listening 
app.listen(PORT, function() {
  console.log('listening on: ' + PORT)
});