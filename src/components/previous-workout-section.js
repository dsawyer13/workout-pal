import React from 'react';
import Workout from './workout.js';
import Exercise from './exercise.js'
import './previous-workout-section.css'

export default function PreviousWorkoutSection(props) {
  return(
    <div className="previous">
      <h2>Past Workouts</h2>
      <ul className="workouts">
        <li className="listItem">
          <Workout />
        </li>
        <li className="listItem">
          <Workout />
        </li>
      </ul>
    </div>
  )
}
