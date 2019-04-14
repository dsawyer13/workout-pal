import React from 'react';
import Exercise from './Exercise';
import format from 'date-fns/format';
import {connect} from 'react-redux';


import {deleteWorkout, addExercise, editExercise} from '../actions';


export class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weight: '',
      sets: '',
      reps: ''
    }
  }

  deleteWorkout = (e) => {
    e.preventDefault();
    this.props.dispatch(deleteWorkout(this.props.id))
  }


  addExercise(id, exercise) {
    this.props.dispatch(addExercise(this.props.id, this.state))
  }
  //
  // removeExercise = (index) => {
  //   const exercises = this.props.exercises;
  //   exercises.splice(index, 1);
  //   this.setState({exercises: exercises});
  // }

  render() {
    let exerciseNum = this.props.exercises.length;
    let date = format(
      new Date(this.props.date),
      'MM/DD/YYYY'
    )

    return(
      <div className="workout">
        <span className="date">{date}</span>
        <span className="exerciseNum">{exerciseNum} exercises</span>
        <input type="button" value="X" onClick={this.deleteWorkout} />
      </div>
    );
  }
}

export default connect()(Workout);
