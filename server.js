const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3001

const app = express();

const { router: workoutsRouter } = require("./workouts/router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/workouts", workoutsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_x8kjmqlp:oj25sqphknpqrssaljcpkb8nap@ds147436.mlab.com:47436/heroku_x8kjmqlp"
);

app.listen(PORT, function() {
  console.log(`API listening on port ${PORT}!`);
});

module.exports = {app}
