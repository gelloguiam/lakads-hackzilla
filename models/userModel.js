var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema   = mongoose.Schema;

var Customer = require('./models/customerModel');

var User = new Schema({
	'username' : String,
	'password' : String,
	'company_name' : String,
	'isDeleted' : Boolean,
	'promos': {
		name: String,
		desc: String,
		longitude: Number,
		latitude: Number,
		address: String,
		slot: Number,
		customer_availed: Customer,
		customer_declined: Customer,
		customer_sent: Customer,
		image: String,
		keywords: [String],
		deleted: Boolean
	}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', User);
