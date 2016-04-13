var http = require ('http');
var fs = require ('fs');
var qs = require ('querystring');
var i = 0;
var nam = [];
var com = [];



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
        i++;
        var post= qs.parse(body);
        nam[i] = post.name;
        com[i] = post.comment;

        //fs.appendFile('forumContents.txt', post.name + " : " + post.comment + '\n', 'UTF-8', {'flags':'a+'});
        console.log(nam[i]);
        console.log(com[i]);
            response.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream("./index.html").pipe(response);
        });
    }

//function to read the updated file and send it back to index.html



//Figure out how to make the front end constantly display the contents of 'forumContents.txt'


server.listen(8888);
console.log('server is now running...');

