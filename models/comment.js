'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
  });
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Discussion);
  };
  return Comment;
};