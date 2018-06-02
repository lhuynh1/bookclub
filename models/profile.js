'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userBio: DataTypes.TEXT,
    faveBook: DataTypes.STRING,
    faveauthor: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    // // associations can be defined here
    // //Profile.hasOne(models.Users, {
    //     //foreignKey: "UserId",
    //     as: "user"
    // })
    // Profile.belongsTo(models.Users,{
    //     foreignKey: "UserId",
    //     onDelete: "CASCADE"
    // })
  };
  return Profile;
};