const express = require("express"); 
const drinkRouter = express.Router(); 

const DrinkModel = require("../models/drinks.js"); 
const CommentModel = require ("../models/comments.js"); 

drinkRouter.route("/")
    .get((req, res)=> {
        DrinkModel.find(req.query)
            .populate("commentId")
            .exec((err, foundDrinks) => {
                if (err) return res.send(err); 
                res.status(200).send(foundDrinks)
            });
    })
    .post((req, res) => {
        const newDrink = new DrinkModel(req.body); 
        newDrink.save((err, savedDrink) => {
            if (err) return res.send(err); 
            DrinkModel.populate(savedDrink, { path: "commentId "}, (err, popDrink) => {
                if(err) return res.send(err); 
                res.status(201).send(popDrink)
            });
        });
    });

drinkRouter.route("/:id")
    .get((req, res) => {
        DrinkModel.findOne({ _id: req.params.id })
            .populate("drinkId")
            .exec((err, foundDrink) => {
                if (err) return res.send(err); 
                if(!foundDrink) return res.status(404).send({ message: "Drink Not Found" })
                res.status(200).send(foundDrink)
            })
    })

    .delete((req, res) => {
        DrinkModel.findOneAndRemove({ _id: req.params.id }, (err, deletedDrink) => {
            if(err) return res.send(err); 
            if(!deletedDrink) return res.status(404).send({ message: "Drink Not Found"})
            res.status(204).send(); 
        })
    })

    .put((req, res) => {
        DrinkModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            // .populate("commentId")
            .exec((err, updatedDrink) => {
                if (err) return res.send(err);
                if (!updatedDrink) return res.status(404).send({ message: "Drink Not Found" });
                res.status(200).send(updatedDrink);
            })
    })

module.exports = drinkRouter;