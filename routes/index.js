var express = require('express');
var router = express.Router();
var passport = require('passport');

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

/* GET home page. */
router.get('/corstest', function(req, res, next) {
    res.send({
        source: 'this',
        stringThingy: 'something awesome goes here which is actually good news'
    });
});

var userController = require('../controllers/userController.js');
router.get ('/user',            userController.list);
router.get ('/user/:id',        userController.show);
router.post('/user',            userController.create);
router.post('/user/login',      passport.authenticate('local'), userController.login);
router.post('/user/logout',     userController.logout);
router.put ('/user/:id',        userController.update);
router.delete('/user/:id',      userController.remove);

module.exports = router;
