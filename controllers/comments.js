var Comment = require("../models").Comment;

module.exports = {
  listAll(req, res) {
    Comment.all().then(function(dbComments) {
      res.render("comments", { hbsComments: dbComments })
    });
  },

  displayOne(req, res) {
    Comment.findById(req.params.commentId).then(function(dbcomment) {
      res.render("updateComment", dbcomment.get());
    })
  },

  create(req, res) {
    return Comment  
      .create({
        title: req.body.title,
        content: req.body.content
      })
      .then(comment => res.redirect('/comments'))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Comment
      .findById(req.params.commentId)
      .then(function(comment) {
        comment.title = req.body.title
        comment.content = req.body.content
        comment.save().then(function() {
          console.log("updated comment");
        });
        res.redirect('/comments');
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Comment
      .findById(req.params.commentId)
      .then(function(comment) {
        comment.destroy();
        console.log("comment deleted");
        res.status(200).send({});
      })
      .catch(error => res.status(400).send(error));
  }
}