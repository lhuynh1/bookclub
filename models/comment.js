'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },  
    content: {
      type: DataTypes.TEXT,
    }, 
  });
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Discussion);
    Comment.belongsTo(models.User);
  };
  return Comment;
};