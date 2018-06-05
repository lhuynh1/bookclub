
var User = require("../models").User;

module.exports = function(app) {
    var passport = require("passport");
    var passportjs = require("../config/passport.js");
    var userController = require("../controllers/users.js");
    app.get("/users", userController.listAll);
    app.post("/users", userController.create);

    app.get('/signup', userController.signup);

    app.get('/signin', userController.signin);

    app.get('/', function(req, res) {
        res.render('welcome');
    
    });

    app.get('/welcome',isLoggedIn, userController.signin);
    
    app.post('/signin', passport.authenticate('local-signin', {
        
        successRedirect: '/',
 
        failureRedirect: '/signin'
        }
    
    ));

    app.post('/signup', function(req, res) {
        User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        });
        res.redirect('/');
        console.log(req.body);     
    });

    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
            res.render('/');
        } else
        res.redirect('/signin');
    }
}