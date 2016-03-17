/**** ORIGINAL CODE ****/

/*
var express = require('express')
var app = express()

//serves all the static files
app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

//serves main page
app.get('/', function(request, response) {
response.sendfile('index.html') 
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/
/**************************************************************************/

/**** PART 1A-readFileSync ****/

/*
var http = require('http');
var fs = require('fs');
var port = process.env.port || 8080

http.createServer(function (request, response) {
  	response.end(fs.readFileSync('index.html'),'utf8');
  }).listen(port);

console.log('Server running on port: ', port);
*/
/**************************************************************************/

/***** PART 1B-readFile ****/


var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 8080

http.createServer(function (request, response) {
	fs.readFile('index.html', function(error, content) {
		if (error) {
			response.writeHead(500);
			response.end();
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(content, 'utf8');
		}
	});
	
}).listen(port);
console.log('Server running on port: ', port);

