var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.write('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <title>Dockerize NodeJS Server</title>'+
' </head>'+ 
' <body>'+
' <p>Here is your guide to <strong>cloud nodejs server </strong></p>'+
' </body>'+
'</html>');
res.end();
});
server.listen(8080);