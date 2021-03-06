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
    }, 
  });
  Discussion.associate = function(models) {
    // associations can be defined here
    Discussion.hasMany(models.Comment, {as: "Comments"});
  };
  return Discussion;
};
