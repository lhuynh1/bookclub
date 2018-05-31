'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    userName: {
      type: DataTypes.TEXT,
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
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });

  User.associate = function(models) {
    // associations can be defined here
   
  };
  return User;
};
