var users = require('../models').User;
var passport = require('../config/passport.js')(passport, users.User);

// module.exports = function(app) {
//     app.get("/signup", routes.signup);
//     app.get("/signin", routes.signin);

//     app.post("/signup", passport.authenticate("local-signup", {
//         successRedirect : "/dashboard"
//     }))
// };

module.exports = {
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
}
