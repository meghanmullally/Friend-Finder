// Dependencies

var path = require('path');


// API routes 

module.exports = function (app) {

  // GET route with the /survey 
  // display survey page 
  
    app.get('/survey', function (req, res) {
    
      res.sendFile(path.join(__dirname, "../public/survey.html"));
  
    });
  

  // if there isn't a matching route default to home 
  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/home.html"));


  });


  }