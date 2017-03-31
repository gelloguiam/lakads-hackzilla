var express = require('express');
var router = express.Router();

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Express' });
});

module.exports = router;
