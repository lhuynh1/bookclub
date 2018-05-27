var express = require('express');
var boddyParser = require('body-parser');
var exhbs = require('express-handlebars');
//var sequelize = require('sequelize');

//set up express app
var app = expres();
var PORT = process.env.PORT || 8080;

//require models for syncing
var db = require('/path/to/models');

//handleing parsing
app.use(boddyParser.urlencoded({ extended: true }));
app.use(boddyParser.json());
app.use(express.statis('public'));


//need to sync sequelize models and run the express app

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})
