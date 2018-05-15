
const express = require("express")  
const User = require("../models/users");  
const authRouter = express.Router();  
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res) => {  
    User.findOne({username: req.body.username.toLowerCase()}, (err, existingUser) => {
        if (err) return res.status(500).send({success: false, err});
        if (existingUser !== null) {
            return res.status(400).send({success: false, err: "That username already exists!"});
        }
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) throw (err);
            const token = jwt.sign(user.toObject(), process.env.SECRET, { expiresIn: "24h" });
            res.send({ token: token, user: user.withoutPassword(), success: true, message: "Here's your token!" }); 
        });
    });
});

authRouter.post("/login", (req, res) => {  
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) return res.status(500).send(err);
        
        if (!user || user.password !== req.body.password) {
            return res.status(403).send({success: false, err: "Email or password are incorrect"})
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET, {expiresIn: "24h"});  
    res.send({user: user.withoutPassword(),token: token, success: true, message: "Here's your token!"}); 
    });
});

module.exports = authRouter;  
