var commentsController = require("../controllers").comments;

var Comment = require("../models").Comment;

module.exports = function(app) {
  app.get("/", (req, res) => res.status(200).send({message: "route works"}));

  //this grabs all comments from the db and renders them in the handlebars page that displays comments
  // app.get("/comments", function(req, res) {
  //   Comment.all().then(function(dbComments) {
  //     res.render("comments", { hbsComments: dbComments })
  //   });
  // });

  app.post("/comments", commentsController.create);

  //app.post("/comments/:commentsId", commentsController.update);
};
