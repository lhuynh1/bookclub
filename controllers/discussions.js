const Discussion = require('../models').Discussion;

module.exports = {
  create(req, res) {
    return Discussion
      .create({
        topic: req.body.topic,
      })
      .then(function() {
        console.log("created a new discussion topic!")
      })
      res.redirect('/discussions');
        
      //   discussion => res.status(201).send(discussion))
      // .catch(error => res.status(400).send(error));
  },

  //displays all topics in db
  listAll(req, res) {
    return Discussion.all().then(function(dbDiscussions) {
      res.render("discussions", { hbsDiscussions: dbDiscussions });
    });
  },

  //displays all comments under specific discussion id 
  commentsForDiscussion(req, res) {
    return Discussion.findById(req.params.discussionId)
      .then(function(discussion) {
        discussion.getComments()
          .then(function(dbcomments) {
            res.render('comments', { hbsComments: dbcomments });
          })
      })
  },

  // createCommentForDiscussion(req, res) {
  //   return Discussion.findById(req.params.discussionId)
  //   .then(function() {

  //   })
  // },

  delete(req, res) {
    return Discussion
      .findById(req.params.discussionId)
      .then(function(discussion) {
        discussion.destroy();
        console.log("discussion deleted deleted");
        res.status(200).send({});
      })
      .catch(error => res.status(400).send(error));
  }
};