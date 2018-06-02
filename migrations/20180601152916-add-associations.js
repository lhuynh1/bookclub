'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Comments", //name of source model
      "DiscussionId", //name of key we are adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Discussions", //target model name
          key: "id", //key that we are referencing is the discussion's id
        },
        onUpdate: "CASCADE",
        OnDelete: "SET NULL",
      }
    )

    .then(() => {
      // Discussion hasMany Product
      return queryInterface.addColumn(
        'Discussions', // name of Target model
        'CommentsId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Comments', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },
  

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Comments",
      "DiscussionId"
    )

    .then(() => {
      // remove Discussion hasMany Comment
      return queryInterface.removeColumn(
        'Discussions', // name of the Target model
        'CommentId' // key we want to remove
      );
    });
  }
};
