var passport = require('passport');
var userModel = require('../models/userModel.js');

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    /**
     * userController.list()
     */
    list: function (req, res) {
        userModel.find(function (err, users) {
            if (err) {
                return res.json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            return res.status(200).json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },

    /**
     * userController.create()
     */
    create: function (req, res) {
        userModel.register(new userModel({username: req.body.username}), req.body.password, function(err, user) {
            if (err) {
                res.send(err);
                // return res.render('register', {user: user});
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    },

    /**
     * userController.login()
     */
    login: function (req, res) {
        res.redirect('/');
    },

    /**
     * userController.logout()
     */
    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },

    /**
     * userController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            user.username = req.body.username ? req.body.username : user.username;
			user.password = req.body.password ? req.body.password : user.password;
			user.company_name = req.body.company_name ? req.body.company_name : user.company_name;
			user.isDeleted = req.body.isDeleted ? req.body.isDeleted : user.isDeleted;
			user.promos = req.body.promos ? req.body.promos : user.promos;
			
            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }

                return res.json(user);
            });
        });
    },

    /**
     * userController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        userModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
