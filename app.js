var http = require ('http');
var fs = require ('fs');
var qs = require ('querystring');

var server = http.createServer(function (request, response) {
    if (request.method == 'GET') {
        onRequest(response);
    } else if (request.method == 'POST') {
        onSubmit(request, response);
    }
});


//Send 404
function send404Response (response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Page not found");
    response.end();
}

//Send user to Homepage
function onRequest (response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }

//Make another function to handle 'POST' (when user inputs to form and it gets posted
//on to the forum.
function onSubmit(request, response) {
        var body = '';

        request.on('data', function(data){
        body += data;
        });

        request.on('end', function(){
        var post= qs.parse(body);
            
        });
    }

server.listen(8888);
console.log('server is now running...');

