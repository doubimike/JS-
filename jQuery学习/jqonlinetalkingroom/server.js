var PORT = 3000;

var http = require('http');
var url = require('url');
var fs = require('js');

var path= require('path');

var server = http.createServer(function (res,req) {
	 /* body... */ 
});

server.listen(PORT);
console.log("Server running at port: " + PORT +".");
