'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
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
    Comment.belongsTo(models.Discussion, {
      foreignKey: 'discussionId',
      onDelete: 'CASCADE',
    });
  };
  return Comment;
};