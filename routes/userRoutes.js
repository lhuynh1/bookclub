var userController = require("../controllers").users;
var User = require("../models").User;

module.exports = function(app) {
    app.get("/users", userController.listAll);
    app.post("/users", userController.create);
}