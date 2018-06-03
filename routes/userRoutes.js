var userController = require("../controllers").users;
var User = require("../models").User;

module.exports = function(app) {
    app.get("/users", userController.listAll);
    app.post("/users", userController.create);

    app.get('/signup', userController.signup);

    app.get('/signin', userController.signin);

    app.post('/signup', function(req, res) {
        User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        })
        console.log(req.body)
        console.log("we hit the route!")      
    });

    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
}