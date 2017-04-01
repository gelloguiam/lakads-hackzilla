var passport = require('passport');
var request = require('request');
var querystring = require('querystring');
var http = require('http');

module.exports = {
    log_return: function (req, res) {
        passport.authenticate('twitter', { failureRedirect: '/login' });
        return res.send(req.user);
    },

    callback: function (req, res) {
        var oauth_token = req.query.oauth_token;
        var oauth_verifier = req.query.oauth_verifier;

        var form = {
            oauth_token: oauth_token,
            oauth_verifier: oauth_verifier
        };

        var formData = querystring.stringify(form);
        var contentLength = formData.length;

        var twitter_data = request({
            url: 'https://api.twitter.com/oauth/access_token',
            form: form,
            method: 'POST'
        }, function (err, httpResponse, body) {
            if (err) return res.send(err);
            else {
                var twitter_out = body.split("&");
                
                var data = {
                    oauth_token:            oauth_token,
                    oauth_verifier:         oauth_verifier,
                    oauth_token_secret:     twitter_out[1].split("=")[1],
                    user_id:                twitter_out[2].split("=")[1],
                    screen_name:            twitter_out[3].split("=")[1],
                    x_auth_expires:         twitter_out[4].split("=")[1],
                };

                // return res.send(data);
                return res.render('twitter_creds', {data: data});
            }
        });
    },

    profile: function (req, res) {
        return res.send(req.user);
    }
};