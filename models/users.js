const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true
    },
    password: {
        type: String, 
        required: true
    }, 
    firstName: String,
    lastName: String,
    email: String,
    favoriteDrinkIds:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "drink"
    }], 
    isAdmin: {
        type: Boolean, 
        default: false
    }
});

module.exports = mongoose.model("User", userSchema);
