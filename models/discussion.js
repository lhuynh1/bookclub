'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discussion = sequelize.define('Discussion', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  // discussion.associate = function(models) {
  //   // associations can be defined here
  // };
  return Discussion;
};