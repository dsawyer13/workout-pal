const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
// const cors = require("cors");

const { PORT } = require("./config");


const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

const { router: workoutsRouter } = require("./workouts/router");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/workouts", workoutsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds147436.mlab.com:47436/heroku_x8kjmqlp")

app.listen(PORT, function() {
  console.log(`API listening on port ${PORT}!`)
})
