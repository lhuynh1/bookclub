var Comment = require("../models").Comment;

module.exports = {
  create(req, res) {
    return Comment  
      .create({
        title: req.body.title,
        content: req.body.content
      })
      .then(comment => res.status(201).send(comment))
        .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Comment
      .findById(req.params.commentId)
      .then(function(comment) {
        Comment.title = req.body.title
        Comment.content = req.body.content
        Comment.save().then(function() {
          console.log("updated comment");
        });
        res.status(200).send(Comment)
      })
      .catch(error => res.status(400).send(error));
  }

}