"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");
const PORT = process.env.PORT || 3001

// const { PORT, DATABASE_URL, CLIENT_ORIGIN } = require("./config");

const { router: workoutsRouter } = require("./workouts/router");

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/workouts", workoutsRouter);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds147436.mlab.com:47436/heroku_x8kjmqlp")

app.listen(PORT, function() {
  console.log(`API listening on port ${PORT}!`)
})
