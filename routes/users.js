var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');

/* GET user info. */
router.get ('/', function(req, res, next, err) {
  if (err) res.send(err);
  res.send('GET User');
});

/* GET users listing. */
router.get ('/getAll', function(req, res, next, err) {
  if (err) res.send(err);
  res.send('GET Users');
});

/* POST session auth credential. */
router.post('/login', function(req, res, next, err) {
  if (err) res.send(err);
  
  passport.authenticate('local', {failureRedirect: '/login'});
  res.send('Succesfully logged in');
});

/* POST new credential. */
router.post('/register', function(req, res, next, err) {
  if (err) res.send(err);
  res.send('Respond with a resource');
});

module.exports = router;
