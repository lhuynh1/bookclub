var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {

    var user = sequelize.define('User', {
        username: {
            type: DataTypes.STRING, 
            unique: true,
            validate: {notNull: true, notEmpty: true},
        },
        password: {
            type: DataTypes.STRING,
            validate: {notNull: true, notEmpty: true}
        }
    })
}