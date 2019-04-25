const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const ExerciseSchema = mongoose.Schema({
  name: String,
  weight: Number,
  sets: Number,
  reps: Number
});

ExerciseSchema.methods.serialize = function() {
  return {
    id: this._id,
    name: this.name,
    weight: this.weight,
    sets: this.sets,
    reps: this.reps
  };
};

const WorkoutSchema = mongoose.Schema({
    date: {type: Date, default: Date.now, required: true},
    exercises: [ExerciseSchema]
});

WorkoutSchema.methods.serialize = function() {
  return {
    id: this.id,
    date: this.date,
    exercises: this.exercises
  };
};

const Exercise = mongoose.model('Exercise', ExerciseSchema);
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = { Exercise, Workout };
