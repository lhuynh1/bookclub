// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');

// express app
var app = express();
var PORT = process.env.PORT || 8080;

// require models
var db = require("./models");

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static(__dirname + '/public'));

// handling data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// routes
require("./routes/discussion-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// sync sequelize models & start express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function () {
        console.log(`App listenting on PORT: ${PORT}`);
    });
});
