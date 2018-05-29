'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
   
  };
  return User;
};
