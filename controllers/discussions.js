const Discussion = require('../models').Discussion;
var Comment = require("../models").Comment;

module.exports = {
  //create a new discussions toppic
  create(req, res) {
    Discussion
      .create({
        topic: req.body.topic,
      })
      .then(function() {
        console.log("created a new discussion topic!")
        res.redirect('/discussions');
      })
  },

  //displays all topics in db to discussions page
  listAll(req, res) {
    Discussion.all().then(function(dbDiscussions) {
      res.render("discussions", { hbsDiscussions: dbDiscussions });
    });
  },

  //displays all comments under specific discussion id 
  commentsForDiscussion(req, res) {
    Discussion.findById(req.params.discussionId)
      .then(function(discussion) {
        discussion.getComments()
          .then(function(dbcomments) {
            var comments = [];
            var userPromises = dbcomments.map(function(dbcomment) {
              return dbcomment.getUser();
            });
            Promise.all(userPromises).then(function(users) {
              for (var i = 0; i < dbcomments.length; i++) {
                var dbcomment = dbcomments[i]
                var comment = dbcomment.get(); 
                var user = users[i];
                if (user) {
                  comment.userName = user.userName;
                }
                comments.push(comment)
              }
              var finalObject = { hbsComments: comments, discussionTopic: discussion.topic };
              res.render('comments', finalObject);
            })
            .catch(function(err) { console.log(err) });
          })
      })
  },

  //create a comment under discussion
  createCommentForDiscussion(req, res) {
    Discussion.findById(req.params.discussionId).then(function(discussion) {
      let comment = Comment.build({
        title: req.body.title,
        content: req.body.content
      });
      comment.setDiscussion(discussion);
      comment.setUser(req.user);
      comment.save()
      .then(function(comment) {
        res.redirect('/discussions/' + discussion.id + '/comments')
      })
      .catch(function(err) {
        console.log(err);
        res.redirect('/signin');
      })
    })
  },

  delete(req, res) {
     Discussion
      .findById(req.params.discussionId)
      .then(function(discussion) {
        discussion.getComments()
        .then(function(comments) {
          for (var i = 0; i < comments.length; i++) {
            comments[i].destroy();
          }
          discussion.destroy();
          res.status(200).send({});
        });
      })
      .catch(error => res.status(400).send(error));
  }
};