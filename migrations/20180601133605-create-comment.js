'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      discussionId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Discussions",
          key: "id",
          as: "discussionId",
        },
      },
    });
  },
  down: (queryInterface/*, Sequelize*/) => {
    return queryInterface.dropTable('Comments');
  }
};