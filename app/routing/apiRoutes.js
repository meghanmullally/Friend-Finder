// Dependencies

var path = require('path');

// import friend list 

var friends = require('../data/friends');

// API routes 

module.exports = function (app) {

  // GET route with the api/friends 
  // used to display JSON of all possible friends 

  app.get('/api/friends', function (req, res) {
    res.json(friends);

  });


  // POST route for api/friends 
  // handle incoming survey results & add new friends 

  app.post('/api/friends', function (req, res) {

    // the user input and response 

    var userInput = req.body;

    var userRep = userInput.scores;

    // best friends match

    var matchName = "";
    var matchImage = "";
    var totalDiff = 1000;

    for (var i = 0; i < friends.length; i++) {
      // difference between questions 
      var diff = 0;
      for (var j = 0; j < userRep.length; j++) {

        // math abs returns the absolute value of a number 
        diff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userRep[j]));
      }

      if (diff < totalDiff) {

        totalDiff = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;

      }

    }

    // add new friend 

    friends.push(userInput);


    // send response 

    res.json({
      status: 'OK',
      matchName: matchName,
      matchImage: matchImage
    });

  });


};