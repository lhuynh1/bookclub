const Discussion = require('../models').Discussion;

module.exports = {
  create(req, res) {
    return Discussion
      .create({
        topic: req.body.topic,
      })
      .then(todo => res.status(201).send(discussion))
      .catch(error => res.status(400).send(error));
  },
};