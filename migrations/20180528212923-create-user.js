'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        notEmpty: true,
      },
      bio: {
        type: Sequelize.TEXT
      },
      favBook: {
        type: Sequelize.STRING
      },
      favAuthor: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
          allowNull: false,
          notEmpty: true,
        }
      },
      password: {
        type:Sequelize.STRING,
        validate: {
          allowNull: false,
          notEmpty: true,
        } 
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};