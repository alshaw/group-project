const mongoose = require("mongoose");

const { Schema } = mongoose;

const drinkSchema = new Schema({
    name: String,
    img: String, 
    glass: String,
    ingredients: {
        quantity1: Number,
        quantity2: Number, 
        quantity3: Number, 
        quantity4: Number, 
        quantity5: Number, 
        quantity6: Number, 
        quantity7: Number, 
        quantity8: Number, 
        quantity9: Number, 
        quantity10: Number, 
        quantity11: Number, 
        quantity12: Number, 
        quantity13: Number, 
        quantity14: Number, 
        quantity15: Number,
        ingredient1: String,
        ingredient2: String,
        ingredient3: String,
        ingredient4: String,
        ingredient5: String,
        ingredient6: String,
        ingredient7: String,
        ingredient8: String,
        ingredient9: String,
        ingredient10: String,
        ingredient11: String,
        ingredient12: String,
        ingredient13: String,
        ingredient14: String,
        ingredient15: String
    },
    directions: String,
    commentIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    posVotes: Number,
    negVotes: Number,
})

const DrinkModel = mongoose.model("Drink", drinkSchema);

module.exports = DrinkModel;