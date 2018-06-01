const Discussion = require('../models').Discussion;

module.exports = {
  create(req, res) {
    return Discussion
      .create({
        topic: req.body.topic,
      })
      .then(discussion => res.status(201).send(discussion))
      .catch(error => res.status(400).send(error));
  },

  listAll(req, res) {
    return Discussion.all().then(discussion => res.status(200).send(discussion))
    .catch(error => res.status(400).send(error));
  },

  commentsForDiscussion(req, res) {
    return Discussion.findById(req.params.discussionId)
      .then(function(discussion) {
        discussion.getComments()
          .then(function(dbcomments) {
            res.render('comments', { hbsComments: dbcomments });
          })
      })
  }
};