var express = require('express');
var bodyParser = require('body-parser');

// Create express app
var app = express();

// Attach middleware:
app.use(bodyParser.json());

// Import the router, assign route
app.use('/api/survey', surveyRouter);

// Establish port number
var port = 3333;

// Create message to display when server is running
app.listen(port, function () {
  console.log('Survey API listening on port ' + port);
});


module.exports = app;
