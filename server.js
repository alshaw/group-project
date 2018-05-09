const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const path = require ("path");

const logger = require("./middleware/logger.js");
const drinkRouter = require("./routes/drinks.js");
const commentRouter = require("./routes/comments.js");
const userRouter = require ("./routes/users.js"); 

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(logger);
app.use(express.static(path.join(__dirname, "client", "build")))

app.use("/api/drinks", drinkRouter);
app.use("/api/comments", commentRouter);
app.use("/api/users", userRouter);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/drinks", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log("Server running on port " + port));