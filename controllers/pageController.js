/**
 * pageController.js
 *
 * @description :: Server-side logic for managing pages.
 */
module.exports = {
    login: function(req, res, next) {
        res.render('login', { title: 'Login', username: 'Hackzilla' });
    },

    home: function(req, res, next) {
        res.render('home', { title: 'Home', username: 'Hackzilla' });
    },

    map: function(req, res, next) {
        res.render('map', { title: 'Map', username: 'Hackzilla' });
    },

    corstest: function(req, res, next) {
        res.send({
            source: 'this',
            stringThingy: 'something awesome goes here which is actually good news'
        });
    }
};
