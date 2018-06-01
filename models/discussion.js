'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define('Discussion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    topic: {
      type:DataTypes.STRING,
      allowNull: false,
    }, 
  });
  Discussion.associate = function(models) {
    // associations can be defined here
    //Discussion.hasMany(models.Comment);
  };
  return Discussion;
};