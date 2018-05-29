'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }, 
  });

  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.discussion, {
      foreignKey: "commentId",
      onDelete: "CASCADE",
    });
  };
  return comment;
};