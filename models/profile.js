'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    faveBook: DataTypes.STRING,
    faveauthor: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.hasOne(models.Users, {
        foreignKey: "UserID",
        as: "user"
    })
    Profile.belongsTo(models.User,{
        foreignKey: "userID",
        onDelete: "CASCADE"
    })
  };
  return Profile;
};