var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({
	'name' : String,
	'twitter_id': Number,
	'twitter_handle' : String,
	'access_token' : String,
	'access_verifier': String,
	'interests' : [{
		brand: String,
		category: String,
		frequency: Number
	}],
	'tweets': [{
		content: String,
		date: Date
	}],
	'isDeleted': Boolean
});

module.exports = mongoose.model('customer', customerSchema);
