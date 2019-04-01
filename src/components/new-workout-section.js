import React from 'react';
import AddWorkout from './add-workout.js';
import WorkoutForm from './workout-form.js';
import Exercise from './exercise.js';
import FinishWorkout from './finish-workout.js';

import './new-workout-section.css';

export default function NewWorkoutSection(props) {

  return(
    <div class="newSection">
      <AddWorkout />
      <div className="exercises">
        <h2>Workout Log</h2>
        <Exercise />
        <Exercise />
        <Exercise />
      </div>
      <WorkoutForm />
      <FinishWorkout />
    </div>

  )

}
