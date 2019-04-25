const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const { PORT, DATABASE_URL, CLIENT_ORIGIN } = require("./config");


const app = express();

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

const { router: workoutsRouter } = require("./workouts/router");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/workouts", workoutsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

mongoose.connect(DATABASE_URL || "mongodb://user:password123@ds147436.mlab.com:47436/heroku_x8kjmqlp")

app.listen(PORT, function() {
  console.log(`API listening on port ${PORT}!`)
})
