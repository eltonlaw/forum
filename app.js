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


//onSubmit takes POST data and writes it into 'forumContents.txt'
function onSubmit(request, response) {
        var body = '';

        request.on('data', function(data){
        body += data;
        });

        request.on('end', function(){
        var post= qs.parse(body);
        fs.appendFile('forumContents.txt', post.name + " : " + post.comment + '\n', 'UTF-8', {'flags':'a+'});
        console.log(post.name);
        console.log(post.comment);
            response.end();
        });
    }


//Figure out how to make the front end constantly display the contents of 'forumContents.txt'


server.listen(8888);
console.log('server is now running...');

