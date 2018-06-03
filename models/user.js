'use strict';
module.exports = (sequelize, DataTypes) => {
 var User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
},
  email: {
    type: DataTypes.STRING,
    validate: {
    isEmail: true,
    notNull: true,
    notEmpty: true
}
},
  userName: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
    notNull: true,
    notEmpty: true
}
},
  password: {
    type: DataTypes.STRING,
    validate: {
    notNull: true,
    notEmpty: true
  }
},
  firstName: {
    type: DataTypes.STRING,
    notEmpty: true
},
  lastName: {
    type: DataTypes.STRING,
    notEmpty: true
},
  favBook: {
    type: DataTypes.STRING
},
  favAuthor: {
    type: DataTypes.STRING
},
  bio: {
    type: DataTypes.TEXT
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
  // User.hasMany(models.Comment);
  };
return User;
};
