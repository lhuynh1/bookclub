var commentsController = require("../controllers").comments;
var discussionsController = require("../controllers").discussions;
var Discussion = require("../models").Discussion;
var Comment = require("../models").Comment;

module.exports = function(app) {
  //app.get("/comments/:commentId", commentsController.displayOne);
  //app.post("/comments", commentsController.create);
  //app.post("/comments/create", commentsController.create);
  app.post("/comments/:commentId", commentsController.update);
  app.delete("/comments/:commentId", commentsController.delete);
  //=======all routes relating to discussions============// //goes to create discussion handlebars page
  
  app.get("/discussions/create", function(req, res) {
    res.render("createDiscussion");
  });
  //runs post method for creating new discussion
  app.post("/discussions/create", discussionsController.create);
  
  //deletes discussion by id
  app.delete("/discussions/:discussionId", discussionsController.delete);
  app.post("/discussions", discussionsController.create);
  app.get("/discussions", discussionsController.listAll);
  app.get("/discussions/:discussionId/comments", discussionsController.commentsForDiscussion);

  app.get("/discussions/:discussionId/comments/new", function(req, res) { 
    res.render('createComment')
  });

  app.post("/discussions/:discussionId/comments/new", discussionsController.createCommentForDiscussion);
};