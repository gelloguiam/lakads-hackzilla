var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({
	'name' : String,
	'twitter_handle' : String,
	'access_token' : String,
	'interests' : [{
		brand: String,
		category: String,
		frequency: Number
	}],
	'isDeleted': Boolean
});

module.exports = mongoose.model('customer', customerSchema);
