import React from 'react';
import Workout from './Workout';
import AddWorkoutForm from './AddWorkoutForm';
import Stats from './Stats';

import {addWorkout} from '../actions';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts());
  }

  addWorkout(workout) {
    this.props.dispatch(addWorkout(workout));
  }


  render() {
    const workouts = this.props.workouts.map((workout, index) {
      <li key={index}>
        <Workout
          id={workout.id}
          date={workout.date}
          exercises={workout.exercises}>
      </li>
    });

    return (
      <div className="homePage">
        <div className="pastWorkouts">
          <h2>Workout Log</h2>
          <ul className="workouts">
            {workouts}
          </ul>
        </div>
        <AddWorkoutForm onAdd={exercises => this.addWorkout(exercises)} />
        <Stats />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts
});

export default connect(mapStateToProps)(HomePage);
