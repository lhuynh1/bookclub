var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

//require routes
require("./routes")(app);
app.get("*", (req, res) => res.status(200).send({
  message: "Welcome to Nowhere..."
}))

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});