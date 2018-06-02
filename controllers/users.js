var routes = require("../routes/user-routes.js");
var passport = require('../config/passport.js')(passport, models.user);

module.exports = function(app) {
    app.get("/signup", routes.signup);
    app.get("/signin", routes.signin);

    app.post("/signup", passport.au)
};