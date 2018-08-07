"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
res.setHeader('Content-Type','application/json');
    var msg = req.body.queryResult.parameters['echoText'];
	var response="";
    return res.json({
                   "fulfillmentText": response,
                   "fulfillmentMessages": [{"text": {"text": ["Loss Types:Employee Occupational,Employee Accident,Employee Leisure,Enterpreneur Accident,Enterpreneur Occupational,Enterpreneur Leisure,Student Declaration"]}}],
				   "source":""
				  });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
