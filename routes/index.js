var userController = require("../controllers").user;
var userRoute = require("./user-routes");

module.exports = function(app) {
    userRoute(app);
}
