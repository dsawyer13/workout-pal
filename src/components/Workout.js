import React from "react";
import format from "date-fns/format";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { deleteWorkout, addExercise  } from "../actions";

export class Workout extends React.Component {

  // componentDidMount() {
  //     this.props.dispatch(fetchWorkouts());
  // }
  //

  deleteWorkout = e => {
    this.props.dispatch(deleteWorkout(this.props.id));
  };
  //
  // addExercise(id, exercise) {
  //   this.props.dispatch(addExercise(this.props.id, this.state));
  // }

  render() {
    console.log()
    let exerciseNum = this.props.exercises.length;
    let date = format(new Date(this.props.date), "MM/DD/YYYY");
    console.log(exerciseNum)
    console.log(date)
    function sumArray(arr, field) {
      let sum = 0;
      for (let i = 0; i<arr.length; i++) {
        sum += arr[i][field];
      }
      return sum;
    }
    let setsNum = sumArray(this.props.exercises, 'sets');
    let repsNum = sumArray(this.props.exercises, 'reps');

    return (
      <>
        <span className="date">{date} </span>
        <span className="exerciseNum">{exerciseNum} exercises </span>
        <span className="setsNum">{setsNum} total sets </span>
        <span className="repsNum">{repsNum} total reps </span>
        <Button variant="danger" onClick={this.deleteWorkout}>
          Delete
        </Button>
      </>
    );
  }
}

Workout.defaultProps = {
  id: '',
  date: '',
  exercises: []
}

export default connect()(Workout);
