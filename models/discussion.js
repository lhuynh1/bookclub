'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discussion = sequelize.define('Discussion', {
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  });
  Discussion.associate = function(models) {
    // associations can be defined here
    Discussion.hasMany(models.Comment, {
      foreignKey: 'discussionId',
      as: "comments"
    });
  };
  return Discussion;
};