const User = require('../models').User;

module.exports = {
    listUser(req, res) {
        User.findById(req.params.userId)
        .then(function(dbuser) {
            console.log(dbuser);
            console.log(dbuser.get)
            res.render("profile", dbuser.get());
        })
    },
    create(req, res) {
        console.log(req.body);
        User.create({
            id: "3",
            email: req.body.email,
            password: req.body.password,
            userName: req.body.userName,
            userBio: req.body.userBio,
            favBook: req.body.favBook,
            favAuthor: req.body.favAuthor,
        })
        .then(user => res.send(user))
        .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return User
        .findById(req.params.userId)
        .then(function(user) {
            User.userName = req.body.userName
            User.bio = req.body.bio
            User.favBook = req.body.favBook
            User.favAuthor = req.body.favAuthor
            User.email = req.body.email
            User.password = req.body.password
            User.save().then(function() {
                console.log("updated profile");
            });
            res.redirect("/users/"+ user.userId+"/update")
        })
        .catch(error => res.status(400).send(error));
    }
};
