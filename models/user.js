'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userBio: DataTypes.TEXT,
    favBook: DataTypes.STRING,
    favAuthor: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Comment, {as: "Comments"}); 
  };
  return User;
};