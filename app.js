var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var router = express.Router();

var http = require('http');
var passport = require('passport');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

var User = require('./models/userModel');
var Customer = require('./models/customerModel');

var index = require('./routes/route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(require('cors')());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
  secret: 'ang gwapo ni almer mendoza',
  resave: false,
  saveUninitialized: false,
  cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }, // 4 hours
}));

// passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new TwitterStrategy({
  consumerKey: 'ZYo3KjfE00026JwA8Wrt0oj2G',
  consumerSecret: 'QaqZl4gczZGrVLVHPMGVkZUCZOUYVaM5VKjZzqnrL13GyW3zEX',
  callbackURL: "/twitter/callback"
}, function(token, tokenSecret, profile, cb) {
    console.log(token, tokenSecret, profile);
    return cb(null, profile);
  }
));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.use('/', index);

// mongoose
mongoose.connect('mongodb://localhost/lakads_db');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.error(err);
  res.render('error');
});

module.exports = app;
