/**
 * pageController.js
 *
 * @description :: Server-side logic for managing pages.
 */
module.exports = {
    login: function(req, res, next) {
        if (req.user) {
            return res.redirect('/home');
        } else {
            res.render('login', { title: 'Express' });
        }
    },

    home: function(req, res, next) {
        // if (!req.user) {
        //     return res.redirect('/');
        // } else {
            res.render('home', { title: 'Express', username: 'Username' });
        // }
    },

    map: function(req, res, next) {
        // if (!req.user) {
        //     return res.redirect('/');
        // } else {
            res.render('map', { title: 'Express', username: 'Username' });
        // }
    },

    corstest: function(req, res, next) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            res.send({
                source: 'this',
                stringThingy: 'something awesome goes here which is actually good news'
            });
        }
    }
};
