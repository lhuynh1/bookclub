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
        OnDelete: "CASCADE",
      }
    )

    .then(() => {
      //Comments BelongTo User
      return queryInterface.addColumn(
        "Comments", //name of source model
        "UserId", //name of key we are adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: "Users", //target model name
            key: "id", //key that we are referencing is the discussion's id
          },
          onUpdate: "CASCADE",
          OnDelete: "SET NULL",
        }
      )
    }) 
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
