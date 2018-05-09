const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteDrinkIds:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drink"
    }]
});

module.exports = mongoose.model("User", userSchema);
