var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});