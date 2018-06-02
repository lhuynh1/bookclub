const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(user-api-routes);
app.get('*', (req, res) => res.status(200).send({
    message: 'testing user-api-routes',
}));

module.exports = app;
 var user = require("../models/user")

 module.exports = function(app) {
     app.get("/api/user/:user", function(req, res){
    
         db.User.findOne({
             where: {
                 user: req.params.userName
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


 
//var profilesController = require("./controllers/profileController");
//  app.get("/", function(req, res) {
//     res.send("hello world");
  
//   app.get("/api",(req, res)=> res.status(200).send({
//     message: "Testing api"
//   }));
//   app.post('/api/profile', profileController.create);
//   });
  
//   const User= require('./models/profile');

// module.exports= (app) => {
//     app.get('/api', (req, res) => res.status(200).send({
//         message: "Testing Profiles API",
//     }));
//     app.post('/api/user/:userId/profile', profileController.create);
//     app.get('/api/user/userId', profileController.recieve)
//     app.delete('/api/user/:userId', profileController.destroy);
// };

// module.exports = app;