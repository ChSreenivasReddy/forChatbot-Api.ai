var express = require("express");
var bodyParser = require("body-parser");
var https = require('https');
var restService = express();
var resStatus;
restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());


restService.post('/echo', function(request, response) {
response.setHeader('Content-Type','application/json');
    //var msg = req.body.queryResult.parameters['echoText'];
	
console.log("POST request to the Node.js method:start");

var options = {
  host: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/A._P._J._Abdul_Kalam',
  method: 'POST'
};

https.request(options, function(res) {
  console.log('HTTPS Status STATUS:' + res.statusCode);
  resStatus='Fullfillmentmessage';
  //console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    //console.log('BODY: ' + chunk);
	resStatus='Loss Types:Employee Occupational,Employee Accident,Employee Leisure';
  });
}).end();
console.log("POST request to the Node.js method:End");
var responseData="";
    var resJson= response.json({
                   "fulfillmentText": responseData,
                   "fulfillmentMessages": [{"text": {"text": [resStatus]}}],
				   "source":""
				  });
				  //console.log("Response JSON "+resJson)
});



restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
