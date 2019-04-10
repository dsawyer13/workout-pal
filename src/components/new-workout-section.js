import React from 'react';
import {connect} from 'react-redux';

import AddWorkout from './add-workout.js';
import Exercise from './exercise.js';


import {addWorkout} from '../actions';

import './new-workout-section.css';

export class NewWorkoutSection extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts());
  }

  render() {
    const exercises = this.props.exercise

    return(
      <div class="newSection">
        <div className="exercises">
          <h2>Workout Log</h2>
          {exercises}
        </div>
        <AddWorkout />
      </div>

    )
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts
});

export default connect(mapStateToProps)(NewWorkoutSection);
