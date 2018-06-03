var commentsDiscussionsRoutes = require("./commentsDiscussionsRoutes");
var userRoutes = require("./userRoutes");

module.exports = function(app) {
  commentsDiscussionsRoutes(app);
  userRoutes(app);
};