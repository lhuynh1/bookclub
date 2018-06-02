var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;

var profilesController = require("./controllers/profileController");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

<<<<<<< HEAD
//require defined routes
require("./routes")(app);

//catch-all route for anything not listed
app.get("*", (req, res) => res.status(200).send({
  message: "Welcome to Nowhere..."
}))
=======
app.get("/", function(req, res) {
  res.send("hello world");

app.get("/api",(req, res)=> res.status(200).send({
  message: "Testing api"
}));
app.post('/api/profile', profileController.create);
});
>>>>>>> mack

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

const User= require('./models/profile');

module.exports= (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: "Testing Profiles API",
    }));
    app.post('/api/user/:userId/profile', profileController.create);
    app.get('/api/user/userId', profileController.recieve)
    app.delete('/api/user/:userId', profileController.destroy);
};
  

module.exports = app;