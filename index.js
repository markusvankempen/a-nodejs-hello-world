var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("a-nodejs-hello-world\n")
    response.end("Markus Test \n Hello World! ");

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
