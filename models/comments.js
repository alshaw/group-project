const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
    name: String,
    comment: String
});

module.exports = mongoose.model("Comment", commentSchema);
