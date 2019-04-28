const mongoose = require("mongoose");
const { Workout, Exercise } = require("./models");
const express = require("express");
const router = express.Router();

//for displaying past workouts
router.get("/", (req, res) => {
  Workout.find()
    .then(workouts => {
      res.status(200).json(workouts.map(workout => workout.serialize()));
    })
    .catch(err => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

//create a new workout
router.post("/", (req, res) => {
  const requiredField = ["exercises"];
  if (!(requiredField in req.body)) {
    return res.status(400).send(`Missing ${requiredField} in request body`);
  }

  Workout.create({ exercises: req.body.exercises })
    .then(workout => res.status(201).json(workout.serialize()))
    .catch(err => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

//delete a workout by id
router.delete("/:id", (req, res) => {
  Workout.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

//delete an exercise
router.delete("/exercise/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { "exercises._id": req.params.id },
    { $pull: { exercises: { _id: req.params.id } } }
  )
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

//update exercises
router.put("/:id/:exerciseid", (req, res) => {
  if (
    !(
      req.params.exerciseid &&
      req.body.id &&
      req.params.exerciseid === req.body.id
    )
  ) {
    res.status(400).json({ error: "Request path id an body id must match" });
  }
  const updated = {};
  const updateableFields = ["name", "weight", "sets", "reps"];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });
  Workout.findOneAndUpdate(
    { _id: req.params.id, "exercises._id": req.params.exerciseid },
    { $set: { "exercises.$": updated } }
  )
    .then(updatedExercise => res.status(204).end())
    .catch(err => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = { router };
