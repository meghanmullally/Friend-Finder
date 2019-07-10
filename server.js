// Dependencies 
var express = require('express');
var path = require("path");

// Set up the Express app 
var app = express();

// process.env.PORT (whatever it is on Heroku) or 3000
// if process.env doesn't exist it will be 3000
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Add the application routes
// require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// starts the server to begin listening 
app.listen(PORT, function() {
  console.log('Friend Finder is listening on: ' + PORT)
});