var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;


//serialize and deserialized is needed for persistent login sessions. 
//passport needs to serialize and unserialize users out of session

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

    User,findOne({
        where: {
            email : email
        }
    }).then(function(user) {
        if(user) {
            return done(null, false, {message: 'Sorry! An account already exists with that email.'});
        } else {
            var userPassword = generateHash(password);
            var data = {
                email : email,
                password : userPassword
            };
            // .create is a sequelize method that adds new entries to the database
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
}