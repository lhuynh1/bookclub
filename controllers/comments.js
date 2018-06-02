var Comment = require("../models").Comment;

module.exports = {
  
//displays one comment by its id
  displayOne(req, res) {
    Comment.findById(req.params.commentId).then(function(dbcomment) {
      res.render("updateComment", dbcomment.get());
    })
  },

//create a comment linked to a discussion
  create(req, res) {
    return Comment  
      .create({
        title: req.body.title,
        content: req.body.content,
        DiscussionId: req.params.discussionId,
      })
      .then(comment => res.send(comment))
        //redirect('/comments'))
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
        res.redirect('/discussions/' + comment.DiscussionId + '/comments');
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