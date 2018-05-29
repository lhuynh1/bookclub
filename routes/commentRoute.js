var commentsController = require("../controllers/commentsController").commentsController;

var Comment = require("../models").Comment;


module.exports = (app) => {
  app.get("/", (req, res) => res.status(200).send("route works"));

  //this grabs all comments from the db and renders them in the handlebars page that displays comments
  app.get("/comments", function(req, res) {
    Comment.all().then(function(dbComments) {
      res.render("comments", { hbsComments: dbComments })
    });
  });

  app.post("/comment", commentsController.create);

  app.post("/comments/:commentstId", commentsController.update);
};
