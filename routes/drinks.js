const express = require("express"); 
const drinkRouter = express.Router(); 
const bodyParser = require("body-parser");
const Drink = require("../models/drinks.js"); 
const CommentModel = require ("../models/comments.js"); 

drinkRouter.get("/", (req, res) => {
  Drink.find()
    .populate("comments")
    .exec((err, drinks) => {
      if (err) return res.status(500).send(err);
      return res.send(drinks);
    });
});

drinkRouter.post("/", (req, res) => {
  console.log(req.body);
  const newDrink = new Drink(req.body);
  newDrink.save(err => {
    if (err) return res.status(500).send(err);
    return res.send(newDrink);
  });
});

drinkRouter.get("/:id", (req, res) => {
  Drink.findById(req.params.id)
    .populate("comments")
    .exec((err, drink) => {
      if (err) return res.status(500).send(err);
      return res.send(drink);
    });
});

drinkRouter.put("/:id", (req, res) => {
  Drink.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedDrink) => {
      if (err) return res.status(500).send(err);
      return res.send(updatedDrink);
    }
  );
});

drinkRouter.delete("/:id", (req, res) => {
  Drink.findByIdAndRemove(req.params.id, (err, removedDrink) => {
    if (err) return res.status(500).send(err);
    return res.send(removedDrink);
  });
});

module.exports = drinkRouter;