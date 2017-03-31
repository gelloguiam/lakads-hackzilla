var express = require('express');
var router = express.Router();
var passport = require('passport');

var pageController = require('../controllers/pageController.js');
router.get('/',                 pageController.login);
router.get('/home',             pageController.home);
router.get('/map',              pageController.map);
router.get('/corstest',         pageController.corstest);

var userController = require('../controllers/userController.js');
router.get ('/user',            userController.list);
router.get ('/user/:id',        userController.show);
router.post('/user',            userController.create);
router.post('/user/login',      userController.login);
router.post('/user/logout',     userController.logout);
router.put ('/user/:id',        userController.update);
router.delete('/user/:id',      userController.remove);

var customerController = require('../controllers/customerController.js');
router.get ('/customer/',       customerController.list);
router.get ('/customer/:id',    customerController.showById);
router.get ('/customer/:handle',customerController.showByHandle);
router.get ('/customer/:token', customerController.showByToken);
router.post('/customer/',       customerController.create);
router.put ('/customer/:id',    customerController.update);
router.delete('/customer/:id',  customerController.remove);

module.exports = router;
