var Sequelize = require('sequelize');
var passportLocalSequelize = require('passport-local-Sequelize');
var lakads_db = new Sequelize(db_name, db_user, db_pass);

var User = passportLocalSequelize.defineUser(lakads_db, {
    address: Sequelize.STRING
});

module.exports = User;
