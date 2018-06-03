'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      notEmpty: true,
    },
    bio: DataTypes.TEXT,
    favBook: DataTypes.STRING,
    favAuthor: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        allowNull: false,
        notEmpty: true,
      }
    },
    password: {
      type:DataTypes.STRING,
      validate: {
        allowNull: false,
        notEmpty: true,
      } 
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
  });
  User.associate = function(models) {
    User.hasMany(models.Comment, {as: "Comments"}); 
  };
  return User;
};