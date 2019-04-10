import React from 'react';
import {connect} from 'react-redux';

import Workout from './workout.js';
import Exercise from './exercise.js'

import {addWorkout, fetchWorkouts} from '../actions';

import './previous-workout-section.css'

export class PreviousWorkoutSection extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts());
  }



  return(
    <div>
      <div className="previous">
        <h2>Past Workouts</h2>
        <ul className="workouts">
          <li className="listItem">
            <Workout />
          </li>
        </ul>
      </div>
    </div>
  )
}
