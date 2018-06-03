'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
      email: {
        type: Sequelize.STRING,
        validate: {
        isEmail: true,
        notEmpty: true
    }
    },
      userName: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
        notNull: true,
        notEmpty: true
    }
    },
      password: {
        type: Sequelize.STRING,
        validate: {
        notNull: true,
        notEmpty: true
      }
    },
      favBook: {
        type: Sequelize.STRING
    },
      favAuthor: {
        type: Sequelize.STRING
    },
      bio: {
        type: Sequelize.TEXT
    },
      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};