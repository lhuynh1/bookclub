var routes = require("../routes/user-routes.js");

module.exports = function(app) {
    app.get("/signup", routes.signup);
    app.get("/signin", routes.signin);
};