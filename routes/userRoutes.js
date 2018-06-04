var userController = require("../controllers").users;
var User = require("../models").user;

module.exports = function(app) {
    app.get("/users/create", function(req, res) {
        res.render('updateProfile')
    });
    app.get("/users/:userName", userController.listUser);
    app.post("/users/create", userController.create);

    app.post("/users/:userName/update", userController.update);
}