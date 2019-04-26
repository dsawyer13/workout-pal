import React from "react";
import format from "date-fns/format";
import { connect } from "react-redux";
import { deleteWorkout } from "../actions";
import "./css/buttons.css";
import "./css/workout.css";

export class Workout extends React.Component {
  deleteWorkout = e => {
    this.props.onDelete(this.props.id);
  };

  render() {
    let exerciseNum = this.props.exercises.length;
    let date = format(new Date(this.props.date), "MM/DD/YYYY");
    function sumArray(arr, field) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i][field];
      }
      return sum;
    }
    let setsNum = sumArray(this.props.exercises, "sets");
    let repsNum = sumArray(this.props.exercises, "reps");

    return (
      <div className="workout">
        <span className="date">{date} </span>
        <span className="exercises">
          {exerciseNum}
          <span className="plain"> exercises </span>
        </span>
        <span className="sets">
          {setsNum}
          <span className="plain"> sets </span>
        </span>
        <span className="reps">
          {repsNum}
          <span className="plain"> reps </span>
        </span>
        <button className="button danger workout" onClick={this.deleteWorkout}>
          X
        </button>
      </div>
    );
  }
}

Workout.defaultProps = {
  id: "",
  date: "",
  exercises: []
};

export default connect()(Workout);
