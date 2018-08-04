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
    var msg = req.body.result.parameters.echoText;
	var response="";
    return res.json({
                   "fulfillmentText": response,
                   "fulfillmentMessages": [{"text": {"text": [msg]}}],
				   "source":""
				  });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
