var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema   = mongoose.Schema;

var User = new Schema({
	'username' : String,
	'password' : String,
	'company_name' : String,
	'isDeleted' : Number,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', User);
