var http = require('http');
var fs = require('fs');

//Send 404
function send404Response (response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Page not found");
    response.end();
}

//Send user to Homepage
function onRequest (request, response) {
    if (request.method == 'GET' && request.url == "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("index.html").pipe(response);
    } else {
        send404Response(response);
    }
}

//Make another function to handle 'POST' (when user inputs to form and it gets posted
//on to the forum.



http.createServer(onRequest).listen(8888);
console.log('server is now running...');



