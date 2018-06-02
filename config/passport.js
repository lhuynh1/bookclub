var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;


//serialize and deserialized is needed for persistent login sessions. 
//passport needs to serialize and unserialize users out of session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then(function (user) {
        if (user) {
            done(null, user.get());
        }
    });
});

//local signup strategy
passport.use('local-signup', new LocalStrategy (
    {
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // passing the entire request to callback
    },

    function(req, email, password, done) {
        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

    User.findOne({
        where: {
            email : email
        }
    }).then(function(user) {
        if(user) {
            return done(null, false, {message: 'Sorry! An account already exists with that email.'});
        } else {
            var userPw = generateHash(password);
            var data = {
                email : email,
                password : userPw,
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            };
            // .create is a sequelize method that adds new entries to the database
            // using .create to create a new user account if it doesn't already exists
        User.create(data).then(function(newUser, created) {
            if(!newUser) {
                return done(null, false);
            }
            if (newUser) {
                return done(null, newUser);
            }
        });
        }
    });
    }
));

// Local signin strategy
passport.use('local-signin', new LocalStrategy (
    {
        //local strategy uses username & pw by default, overriding with email instead
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true //passing entire request to callback
    },

    function(req, email, password, done) {
        var User = user;
        var isValidPassword = function (userpass, password) {
            // comparing hashed passwords to make sure it's the correct pw that is entered
            return bCrypt.compareSync(password, userpass);
        }

        User.findOne({
            where: {email: email}
        }).then(function (user) {
            if (!user) {
                return done(null, false, {message: 'Sorry, that email does not exist'});
            }
            if (!isValidPassword (user.password, password)) {
                return done(null, false, {message: 'Sorry, that is an incorrect password. Try again.'});
            }

            var userinfo = user.get();
            return done (null, userinfo);

        }).catch(function (err) {
            console.log("Error occured: ", err);
            return done(null, false, {
                message: 'Something went wrong with your log in'
            });
        })
    }
));
}