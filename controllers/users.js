const User = require('../models').User;
var passport = require('../config/passport.js')(passport, User);

module.exports = {
    listAll(req, res) {
        User.all().then(function(users) {
            res.send(users);
        })
    },

    create(req, res) {
        User.create({
            userName: req.body.userName,
            userBio: req.body.userBio,
            favBook: req.body.favBook,
            favAuthor: req.body.favAuthor,
        }).then(function(user) {
            res.send(user);
        })
    },

    signup (req, res) {
        res.render('signup');
    },
    
    signin (req, res) {
        res.render('signin');
    },

    logout (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/');
        });
    }
};
