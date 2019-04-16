import React from "react";
import Exercise from "./Exercise";
import format from "date-fns/format";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";

import { deleteWorkout, addExercise, editExercise } from "../actions";

export class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: "",
      sets: "",
      reps: ""
    };
  }

  deleteWorkout = e => {
    e.preventdefault();
    this.props.dispatch(deleteWorkout(this.props.id));
  };

  addExercise(id, exercise) {
    this.props.dispatch(addExercise(this.props.id, this.state));
  }

  render() {
    let exerciseNum = this.props.exercises.length;
    let date = format(new Date(this.props.date), "MM/DD/YYYY");
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

export default connect()(Workout);
