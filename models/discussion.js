'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discussion = sequelize.define('Discussion', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  });

  Discussion.associate = function(models) {
    // associations can be defined here
    Discussion.hasMany(models.Comments, {
      foreignKey: "commentsId",
      as: "comments"
    })

    Discussion.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Discussion;
};