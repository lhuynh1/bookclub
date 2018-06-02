//add to index
// const User= require('../models').profile;

// module.exports= (app) => {
//     app.get('/api', (req, res) => res.status(200).send({
//         message: "Testing Profiles API",
//     }));
//     app.post('/api/profile', profileController.create);
// };

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// require('./server/routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
// }));

// const users = require('./profileController');
// module.exports = {
//     user,
//     userProfile,
// };

// app.post('/api/user/:userId/profile', profileController.create);
// app.get('/api/user/userId', profileController.retrieve);

// module.exports = app;

const userProfile = require('../models').user;

module.exports = {
    create(req, res) {
        return User
            .create({
                userName: req.body.userName,
                userID: req.body.userId,
            })
            .then (User => res.status(201).send(User))
            .catch(error => res.status(400).send(error));
    },

list(req, res) {
    return user
        .findAll({
            include: [{
                model: Profile,
                as: 'userProfile',
            }],
        })
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error));
},

retrieve(req, res) {
    return User
    .findbyId(req.params.userId, {
        include: [{
            model: User,
            as: userId,
        }],
    })
    .then(user => {
        if (!user) {
            return res.status(404).send({
                message: 'User Not Found',
            });
        }
        return res.status(200).send(user);
    })
    .catch(error => res.status(400).send(error));
},

destroy (req, res) {
    return User
    .findById(req.params.userId)
    .then (user => {
        if (!user){
        return res.status(400).send({
            message: 'User Not Found',
        });
    }
    return user
        .destroy()
        .then(() => res.status(204).send({ message: 'User deleted successfully.'}))
        .catch (error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},

};