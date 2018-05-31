var commentsController = require("../controllers").comments;

var Comment = require("../models").Comment;

module.exports = function(app) {
  //==================//
  //routes relating to comments model
  app.get("/", (req, res) => res.status(200).send({message: "route works"}));

  //this grabs all comments from the db and renders them in the handlebars page 
  //that displays comments
  app.get("/comments", commentsController.listAll);

  //displays the create comment handlebars page
  app.get("/comments/create", function(req, res) {
    res.render("createComment");
  });

  //search for a specific post by id
  app.get("/comments/:commentId", commentsController.displayOne);

  //these routes handle comment create, update, delete functionality
  app.post("/comments", commentsController.create);
  app.post("/comments/create", commentsController.create);

  app.post("/comments/:commentId", commentsController.update);
  app.delete("/comments/:commentId", commentsController.delete);
};
