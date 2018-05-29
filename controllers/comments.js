var Comment = require("../models").Comment;

module.exports = {
  create(req, res) {
    return Comment  
      .create({
        title: req.body.title,
        content: req.body.body
      })
      .then(comment => res.status(201).send(comment))
        .catch(error => res.status(400).send(error));
  }

}