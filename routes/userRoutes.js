var userController = require("../controllers").users;
var User = require("../models").User;
var passport = require("passport");

module.exports = function(app) {
    app.get('/users', userController.listAll);
    app.post('/users', userController.create);

    app.get('/signup', userController.signup);

    app.get('/signin', userController.signin);
    
    app.post(
        '/signin',
        passport.authenticate('local', { failureRedirect: '/signin' }),
        function(req, res) {
            res.redirect('/profile/' + req.user.id);
        }
    )

    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
            res.render('/');
        } else
        res.redirect('/signin');
    }
}