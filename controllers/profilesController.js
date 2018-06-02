var express = require('express');

var router = express.Router();

var user = require("../models/user.js");

router.get("/api/user", function(req, res){
    user.create(["id", "name"], [req.body.id, req.body.name], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("api/user/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("name", name);

    user.update(
        {
            name: req.body.name
        },
        name,
        function(result) {
            if (result.changedRows === 0){
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;