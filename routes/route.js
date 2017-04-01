var express = require('express');
var router = express.Router();
var passport = require('passport');

var pageController = require('../controllers/pageController.js');
router.get('/',                                 pageController.login);
router.get('/home',                             pageController.home);
router.get('/map',                              pageController.map);
router.get('/corstest',                         pageController.corstest);

var userController = require('../controllers/userController.js');
router.get ('/user',                            userController.list);
router.get ('/user/:id',                        userController.show);
router.post('/user',                            userController.create);
router.post('/user/login',                      passport.authenticate('local'), userController.login);
router.post('/user/logout',                     userController.logout);
router.put ('/user/:id',                        userController.update);
router.delete('/user/:id',                      userController.remove);

var customerController = require('../controllers/customerController.js');
router.get ('/customer',                        customerController.list);
router.get ('/customer/twitter/creds',          customerController.listTwitterCreds);
router.get ('/customer/:id',                    customerController.show);
router.get ('/customer/:handle',                customerController.showAllHandle);
router.get ('/customer/:token',                 customerController.showAllToken);
router.post('/customer/',                       customerController.create);
router.put ('/customer/:id',                    customerController.update);
router.delete('/customer/:id',                  customerController.remove);

var twitterController = require('../controllers/twitterController.js');
router.get('/twitter/login',                    passport.authenticate('twitter'));
router.get('/twitter/login/return',             twitterController.log_return);
router.get('/twitter/callback',                 twitterController.callback);
router.get('/profile',                          require('connect-ensure-login').ensureLoggedIn(), twitterController.profile);

var promoController = require('../controllers/promoController');
router.get('/promo',                            promoController.find); //pls add query
router.post('/promo',                           promoController.add);
router.put('/promo/:id',                        promoController.edit);
// router.get('', promoController.add);

module.exports = router;
