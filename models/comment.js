'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    createdAt: DataTypes.TIMESTAMP
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};