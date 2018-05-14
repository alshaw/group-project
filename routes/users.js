const express = require("express"); 
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

const UserModel = require ("../models/users.js"); 
const DrinkModel = require("../models/drinks.js"); 

userRouter.route("/")
    .get((req, res)=> {
        UserModel.find(req.query)
            .populate("drinkId")
            .exec((err, foundUsers) => {
                if (err) return res.send(err); 
                res.status(200).send(foundUsers)
            });
    })
    .post((req, res) => {
        const newUser = new UserModel(req.body); 
        newUser.save((err, savedUser) => {
            if (err) return res.send(err); 
            UserModel.populate(savedUser, { path: "commentId "}, (err, popUser) => {
                if(err) return res.send(err); 
                res.status(201).send(popUser)
            });
        });
    });

userRouter.route("/:id")
    .get((req, res) => {
        UserModel.findOne({ _id: req.params.id })
            .populate("userId")
            .exec((err, foundUser) => {
                if (err) return res.send(err); 
                if(!foundUser) return res.status(404).send({ message: "User Not Found" })
                res.status(200).send(foundUser)
            })
    })

    .delete((req, res) => {
        UserModel.findOneAndRemove({ _id: req.params.id }, (err, deletedUser) => {
            if(err) return res.send(err); 
            if(!deletedUser) return res.status(404).send({ message: "User Not Found"})
            res.status(204).send(); 
        })
    })

    .put((req, res) => {
        UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            // .populate("drinkId")
            .exec((err, updatedUser) => {
                if (err) return res.send(err);
                if (!updatedUser) return res.status(404).send({ message: "User Not Found" });
                res.status(200).send(updatedUser);
            })
    })

module.exports = userRouter;