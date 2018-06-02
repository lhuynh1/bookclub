var commentsController = require("../controllers").comments;
var discussionsController = require("../controllers").discussions;
var Discussion = require("../models").Discussion;
var Comment = require("../models").Comment;

module.exports = function(app) {
  //===============================================================//
  //================All routes relating to comments================//
  //===============================================================//
  // app.get("/", (req, res) => res.status(200).send({message: "route works"}));

  // //this grabs all comments from the db and renders them in the handlebars page 
  // //that displays comments

  // //displays the create comment handlebars page
  app.get("/comments/create", function(req, res) {
     res.render("createComment");
   });

  //page to display one comment by id
  app.get("/comments/:commentId", commentsController.displayOne);

  // //these routes handle comment create, update, delete functionality
  app.post("/comments", commentsController.create);
  app.post("/comments/create", commentsController.create);
  app.post("/comments/:commentId", commentsController.update);
  app.delete("/comments/:commentId", commentsController.delete);
  //================================================================//
  //=============need to put all of these in their own file=========//
  //================================================================//

  app.post("/discussions", discussionsController.create);
  app.get("/discussions", discussionsController.listAll);
  app.get("/discussions/:discussionId/comments", discussionsController.commentsForDiscussion);
  app.post("/discussions/:discussionId/comments", commentsController.create);
};
