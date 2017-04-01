var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema   = mongoose.Schema;

var Promo = new Schema({
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
});


module.exports = mongoose.model('promo', Promo);
