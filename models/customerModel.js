var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

module.exports = function () {
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

	return mongoose.model('customer', customerSchema);
};
