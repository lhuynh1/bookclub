var userController = require("../controllers").users;

// var exports = module.exports = {};
// exports.signup = function(req, res) {
//     res.render("signup");
// }

// exports.signin = function(req, res) {
//     res.render("signin");
// }

module.exports = function(app, passport){
    app.get('/signup', userController.signup);

    app.get('/signin', userController.signin);

    app.post('/signup', passport.authenticate('local-signup', 
        {successRedirect: '/welcome',
        failureRedirect: '/signup'}));

    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
}