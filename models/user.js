'use strict';
module.exports = (sequelize, DataTypes) => {
var User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
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
      notEmpty: true,
  }
},
  password: {
    type:DataTypes.STRING,
    validate: {
      notEmpty: true,
} 
},
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active'
},
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
},
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
}
});
User.associate = function(models) {
  User.hasMany(models.Comment, {as: "Comments"}); 
};
return User;
};