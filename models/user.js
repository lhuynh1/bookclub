'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.comments, {
      foreignKey: "commentId",
      onDelete: "CASCADE"
    });
  };
  return User;
};