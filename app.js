var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware= require('node-sass-middleware');
var jwt = require("jsonwebtoken");
var usersController = require("./controllers/users-controller.js")

var app = express();

// view engine setup
app.set('views', path.join(__dirname,"/public/" ,'views'));
app.set('view engine', 'hjs');

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
app.get("/api/users",usersController.getAll);
app.get("/api/users/:id",usersController.getById);
app.post("/api/users/:id",usersController.update);
app.post("/api/users",usersController.post);
app.delete("/api/users/:id",usersController.deleteById);

app.post("/api/authenticate",usersController.authenticate);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

