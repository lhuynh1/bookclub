var routes = require("../routes/user-routes.js");
var passport = require('../config/passport.js')(passport, models.user);

// module.exports = function(app) {
//     app.get("/signup", routes.signup);
//     app.get("/signin", routes.signin);

//     app.post("/signup", passport.authenticate("local-signup", {
//         successRedirect : "/dashboard"
//     }))
// };

module.exports = function(app) {
    signup = function (req, res){
        res.render('signup');
    }
    
    signin = function (req, res){
        res.render('signin');
    }

    logout = function(req, res){
        req.session.destroy(function (err) {
            res.redirect('/');
        });
    }
}
