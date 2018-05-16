const mongoose = require("mongoose");

const { Schema } = mongoose;

const drinkSchema = new Schema({
    name: String,
    img: String, 
    glass: String,
    ingredients: String,
    directions: String,
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    commentIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    posVotes: Number,
    negVotes: Number,
})

const DrinkModel = mongoose.model("Drink", drinkSchema);

module.exports = DrinkModel;