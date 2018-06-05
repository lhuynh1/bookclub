var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")
var exphbs = require("express-handlebars");
var app = express();
var passport = require("passport");
var session = require("express-session");
var PORT = process.env.PORT || 8080;

var passportjs = require('./config/passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// passport setup
app.use(session({ secret: 'qjd7543HusfiSJG862lp', resave: true, saveUninitialized: true})) //session secret
app.use(passport.initialize());
app.use(passport.session()); //for persistent login sessions

app.use(express.static("public"))
// handlebars set up
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
  
