var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")
var exphbs = require("express-handlebars");
var app = express();
var passport = require("passport");
var flash = require("connect-flash");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var PORT = process.env.PORT || 8080;

// passport setup
app.use(session({ secret: 'qjd7543HusfiSJG862lp', resave: true, saveUninitialized: true})) //session secret
app.use(passport.initialize());
app.use(passport.session()); //for persistent login sessions
app.use(flash()); //connect-flash for flash messages stored in session
app.use(cookieParser()); //read cookies which is needed for authentication 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/signup", function(req, res) {
  res.render("signup");
});

app.get("/login", function(req, res) {
  res.render("login");
});

var userRoute = require("./routes/user-routes.js");
//load passport strategies
var passport = require('./config/passport.js')(passport);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});