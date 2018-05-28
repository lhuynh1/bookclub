var comment = require("../models/comment");
var express = require("express");
var router = express.Router();

//set up route to handlebars
router.get("/", function(req, res) {
  comment.findAll(function(data) {
    var hbsObj = {
      comments: data
    };
    console.log(hbsObj);
    res.render("discussions", hbsObj);
  })
})

module.exports = router;