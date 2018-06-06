var userController = require("../controllers").users;
var User = require("../models").User;
var passport = require("passport");

module.exports = function(app) {
    app.get("/profile/:userId", userController.listOne)
    app.get("/profile", userController.loggedInUser)

    app.get("/profile/:userId/update", function(req, res) {
        User.findById(req.params.userId).then(function(user) {
            res.render('updateProfile', user.get());
        })
    });

    app.post('/profile/:userId/update', userController.update)

    app.post('/signup', userController.create);

    app.get('/signup', userController.signup);

    app.get('/signin', userController.signin);

    app.get('/', function(res, res) {
        res.render('welcome');
    })
    
    app.post(
        '/signin',
        passport.authenticate('local', { failureRedirect: '/signin' }),
        function(req, res) {
            res.redirect('/profile/' + req.user.id);
        }
    )

    app.post('/logout', userController.logout);
    app.get('/logout', userController.logout);
}