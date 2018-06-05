var userController = require("../controllers").users;
var User = require("../models").User;
var passport = require("passport");

module.exports = function(app) {
    app.get("/profile/:userId", userController.listOne)

    app.post("/profiles/:userId", userController.updateOne);

    app.post('/signup', userController.create);

    app.get('/signup', userController.signup);

    app.get('/signin', userController.signin);
    
    app.post(
        '/signin',
        passport.authenticate('local', { failureRedirect: '/signin' }),
        function(req, res) {
            res.redirect('/profile/' + req.user.id);
        }
    )
}