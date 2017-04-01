var customerModel = require('../models/customerModel.js');

/**
 * customerController.js
 *
 * @description :: Server-side logic for managing customers.
 */
module.exports = {

    /**
     * customerController.list()
     */
    list: function (req, res) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            customerModel.find(function (err, customers) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting customer.',
                        error: err
                    });
                }
                return res.json(customers);
            });
        }
    },

    /**
     * customerController.list_twitter_creds()
     */
    listTwitterCreds: function (req, res) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            var customersData = { 
                __v: false,
                _id: false,
                access_token: false,
                interests: false,
                isDeleted: false
            };

            User.find({}, customersData, function (err, customers) {
                if (err) return next(err);
                else res.json(customers);
            });
        }
    },

    /**
     * customerController.showById()
     */
    show: function (req, res) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            var id = req.params.id;
            customerModel.findOne({_id: id}, function (err, customer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting customer.',
                        error: err
                    });
                }
                if (!customer) {I
                    return res.status(404).json({
                        message: 'No such customer'
                    });
                }
                return res.json(customer);
            });
        }
    },

    /**
     * customerController.showByHandle()
     */
    showAllHandle: function (req, res) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            var customersData = { 
                __v: false,
                _id: false,
                name: false,
                twitter_handle: false,
                interests: false,
                isDeleted: false
            };

            User.find({}, customersData, function (err, customers) {
                if (err) return next(err);
                else res.json(customers);
            });
        }
    },

    /**
     * customerController.showByToken()
     */
    showAllToken: function (req, res) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            var customersData = { 
                __v: false,
                _id: false,
                name: false,
                accesstoken: false,
                interests: false,
                isDeleted: false
            };

            User.find({}, customersData, function (err, customers) {
                if (err) return next(err);
                else res.json(customers);
            });
        }
    },

    /**
     * customerController.create()
     */
    create: function (req, res) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            var customer = new customerModel({
                name : req.body.name,
                twitter_handle : req.body.twitter_handle,
                access_token : req.body.access_token,
            });

            customer.save(function (err, customer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when creating customer',
                        error: err
                    });
                }
                return res.status(201).json(customer);
            });
        }
    },

    /**
     * customerController.dump()
     */
    dump_tweet: function (req, res) {
        var user = req.body.user;
        var tweet = req.body.tweets;
        req.body.tweets.forEach(function (customer) {
            var customer = new customerModel({
                name : req.body.name,
                twitter_handle : req.body.twitter_handle,
                access_token : req.body.access_token,
            });

            customer.save(function (err, customer) {
                if (err) {
                    console.log({
                        message: '[ERROR] ' + customer,
                        error: err
                    });
                }
                console.log('[DONE] ' + customer);
            });
        });

        res.send('Dump complete!');
    },

    /**
     * customerController.update()
     */
    update: function (req, res) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            var id = req.params.id;
            customerModel.findOne({_id: id}, function (err, customer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting customer',
                        error: err
                    });
                }
                if (!customer) {
                    return res.status(404).json({
                        message: 'No such customer'
                    });
                }

                customer.name = req.body.name ? req.body.name : customer.name;
                customer.twitter_handle = req.body.twitter_handle ? req.body.twitter_handle : customer.twitter_handle;
                customer.access_token = req.body.access_token ? req.body.access_token : customer.access_token;
                customer.interests = req.body.interests ? req.body.interests : customer.interests;
                
                customer.save(function (err, customer) {
                    if (err) {
                        return res.status(500).json({
                            message: 'Error when updating customer.',
                            error: err
                        });
                    }

                    return res.json(customer);
                });
            });
        }
    },

    /**
     * customerController.remove()
     */
    remove: function (req, res) {
        if (!req.user) {
            return res.redirect('/');
        } else {
            var id = req.params.id;
            customerModel.findByIdAndRemove(id, function (err, customer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when deleting the customer.',
                        error: err
                    });
                }
                return res.status(204).json();
            });
        }
    }
};
