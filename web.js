var http = require('http');
var fs = require('fs');
var buffer = fs.readFileSync('./index.html','utf8');
var funcMsg = buffer.toString('utf-8');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(funcMsg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
