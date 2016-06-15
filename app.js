var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware= require('node-sass-middleware');

var users = require("./routes/users.js")

var app = express();

// view engine setup
app.set('views', path.join(__dirname,"/public/" ,'views'));
app.set('view engine', 'hjs');

// MongoDB Setup
app.get('/forum', function(req,res){
  console.log("I received a GET request");

  db.forum.find(function(err,docs) {
    console.log(docs);
    res.json(docs);
  });

});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/stylesheets',sassMiddleware({
  src: __dirname + '/sass',
  dest: __dirname + '/public/stylesheets',
  debug: true, // obvious,
  outputStyle: 'compressed',
}));
// API Routes
app.get("/api/users",users.getAll);
app.get("/api/users/:id",users.getById);
app.post("/api/users/:id",users.update);
app.post("/api/users",users.post);
app.delete("/api/users/:id",users.deleteById);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

