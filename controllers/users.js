const User = require('../models').User;

module.exports = {
    listOne(req, res) {
        User.findById(req.params.userId).then(function(dbUser) {
            res.render('profile', dbUser.get());
        })
    },

    loggedInUser(req, res) {
        res.render('profile', req.user.get())
    },

    create(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            userName: req.body.userName,
            userBio: req.body.userBio,
            favBook: req.body.favBook,
            favAuthor: req.body.favAuthor,
        }).then(function(user) {
            res.redirect("/signin");
        })
        .then(user => res.send(user))
        .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return User
        .findById(req.params.userId)
        .then(function(user) {
            user.userName = req.body.userName
            user.bio = req.body.bio
            user.favBook = req.body.favBook
            user.favAuthor = req.body.favAuthor
            user.email = req.body.email
            user.password = req.body.password
            user.save().then(function() {
                console.log("updated profile id: " + user.id);
                res.redirect("/profile/" + user.id)
            });
        })
        .catch(error => res.status(400).send(error));
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

