var AuthenticateLoggedIn = function (req, res) {
    if (!req.user) {
        return res.status(400).send('Must be logged in!\n' + req.user);
    }
}

var NotLoggedIn = function (req, res) {
    if (req.user) {
        return res.redirect('/home');
    }
}

/**
 * pageController.js
 *
 * @description :: Server-side logic for managing pages.
 */
module.exports = {
    login: function(req, res, next) {
        NotLoggedIn(req, res);

        res.render('login', { title: 'Login', username: 'Hackzilla' });
    },

    home: function(req, res, next) {
        // AuthenticateLoggedIn(req, res);

        res.render('home', { title: 'Home', username: 'Hackzilla' });
    },

    map: function(req, res, next) {
        AuthenticateLoggedIn(req, res);

        res.render('map', { title: 'Map', username: 'Hackzilla' });
    },

    corstest: function(req, res, next) {
        AuthenticateLoggedIn(req, res);

        res.send({
            source: 'this',
            stringThingy: 'something awesome goes here which is actually good news'
        });
    }
};
