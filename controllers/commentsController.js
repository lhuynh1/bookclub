var Comment = require("../models").Comment;

module.exports = {
  create(req, res) {
    return Comment  .create({
      title: req.body.title,
      content: req.body.content
    }).then(comment => res.status(201).send(comment))
      .catch(comment => res.status(400).send(error));
  }
}