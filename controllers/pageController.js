/**
 * pageController.js
 *
 * @description :: Server-side logic for managing pages.
 */
module.exports = {
    login: function(req, res, next) {
        res.render('login', { title: 'Express' });
    },

    home: function(req, res, next) {
        res.render('home', { title: 'Express' });
    },

    map: function(req, res, next) {
        res.render('map', { title: 'Express' });
    },

    corstest: function(req, res, next) {
        res.send({
            source: 'this',
            stringThingy: 'something awesome goes here which is actually good news'
        });
    }
};
