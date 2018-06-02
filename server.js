<<<<<<< HEAD
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
=======
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
>>>>>>> posts

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
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
=======
app.use(express.static(__dirname + "/public"));

//require defined routes
require("./routes")(app);

//catch-all route for anything not listed
app.get("*", (req, res) => res.status(200).send({
  message: "Welcome to Nowhere..."
}))

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
>>>>>>> posts
});