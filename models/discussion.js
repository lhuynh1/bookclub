'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discussion = sequelize.define('Discussion', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  Discussion.associate = function(models) {
    // associations can be defined here
  };
  return Discussion;
};