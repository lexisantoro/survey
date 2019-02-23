var surveyRouter = require('express').Router();
var surveyController = require('./controller');

// Create route handlers 
surveyRouter.route('/')
    .post(surveyController.createSurvey)
    
surveyRouter.route('/:number')
    .get(surveyController.getSurveyResults)
    .post(surveyController.takeSurvey)
    


module.exports = surveyRouter;
