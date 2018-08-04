"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

var request=require("request");
var path=require("path");

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());


var result;
function cb (error, response, body){
  if(error){
  console.log('error',error);
  }
   var resApi=JSON.parse(body);
   if(resApi.message==''){
   }
   else
   {
   result=resApi;
    }
   
}

function getClaim(){
result=undefined;
//var url=""+identifier;
var url="http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json";
console.log(url);
var req=request(url,cb);
while(result===undefined){
  require('deasync').runLoopOnce();
  }
return result;
}

restService.post('/echo', function(req, res) {
res.setHeader('Content-Type','application/json');
    var msg = getclaim();
  var response="";
	return msg;
   // return res.json({
                   "fulfillmentText": response,
                   "fulfillmentMessages": [{"text": {"text": ["Report A Damage!!! This is an Webhook API call for Claims....."]}}],
           "source":""
          });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
