var db = require("../models")

module.exports = function(app) {
    app.get("/api/user/:user", function(req, res){
        db.User.findOne({
            where: {
                user: req.params.category
            }
        })
        .then(function(dbUser){
            res.json(dbUser)
        });
    });

    app.post("api/user", function(req, res){
        console.log(req.body);
        db.User.create({
            id: req.params.id,
            userName: req.body.userName,
        })
        .then(function(dbUser){
            res.json(dbUser);
        });
    });
    app.delete("/api/user/:id", function(req, res){
        db.user.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbUser){
            res.json(dbUser);
        });
    });
    app.put("api/user", function(req,res){
        db.User.update(req.body,
        {
            where: {
                id: req.body.id
            }
        })
        .then(function(dbUser){
            res.json(dbUser);
        });
    });
};