var userController = require("../controllers").users;
var passport = require("passport");

// var exports = module.exports = {};
// exports.signup = function(req, res) {
//     res.render("signup");
// }

// exports.signin = function(req, res) {
//     res.render("signin");
// }

module.exports = function(app) {
    app.get('/signup', userController.signup);

    app.get('/signin', userController.signin);

    app.post('/signup', function(req, res) {
        console.log("we hit the route!")
        res.redirect("/discusssions")
    });

    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
}