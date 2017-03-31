var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema   = mongoose.Schema;

module.exports = function (Customer) {
    var User = new Schema({
    'username' : String,
    'password' : String,
    'company_name' : String,
    'isDeleted' : Boolean,
    'promos': [{
        name: String,
        desc: String,
        longitude: Number,
        latitude: Number,
        address: String,
        slot: Number,
        customer_availed: [Object],
        customer_declined: [Object],
        customer_sent: [Object],
        image: String,
        keywords: [String],
        deleted: Boolean
    }]
});

    User.plugin(passportLocalMongoose);

    return mongoose.model('user', User);
};
