var userController = require("../controllers").users;
var User = require("../models").User;
var passport = require("passport");

module.exports = function(app) {
    app.get('/users', userController.listAll);
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
}