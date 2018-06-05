var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")
var User = db.User;
var exphbs = require("express-handlebars");
var app = express();
var passport = require("passport");
var Strategy = require('passport-local').Strategy;
var session = require("express-session");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

passport.use(new Strategy(
  function(username, password, cb) {
    console.log(username)
    console.log(password)
    User.findOne({ where: { userName: username, password: password }})
    .then(function(user) {
      if (user) {
        cb(null, user);
      } else {
        cb(null, false);
      }
    })
    .catch(function(error) {
      cb(error);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.User.findById(id).then(function(user) {
    cb(null, user);
  })
})

// passport setup
app.use(session({ secret: 'qjd7543HusfiSJG862lp', resave: true, saveUninitialized: true})) //session secret

app.use(passport.initialize());
app.use(passport.session());

// handlebars set up
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});