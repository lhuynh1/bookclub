'use strict';
module.exports = (sequelize, DataTypes) => {
  var discussion = sequelize.define('discussion', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    content: DataTypes.STRING
    }, 
  });
  
  discussion.associate = function(models) {
    // associations can be defined here
    discussion.hasMany(models.comment, {
      foreignKey: "commentId",
      as: "comment",
    })
  };
  return discussion;
};