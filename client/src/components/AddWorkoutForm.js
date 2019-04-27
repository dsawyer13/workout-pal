import React from "react";
import Exercise from "./Exercise.js";
import TableForm from "./TableForm.js";
import Select from "react-select";
import { groupedOptions } from "../data.js";
import "./css/buttons.css";
import "./css/table-and-form.css";

export default class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      exercises: [],
      exerciseIndex: "",
      display: false,
      editing: false,
      name: "",
      weight: "",
      sets: "",
      reps: ""
    };
  }

  setEditing = index => {
    this.setState({
      exerciseIndex: index,
      editing: !this.state.editing
    });
  };

  setAdding = adding => {
    this.setState({
      adding
    });
  };

  displayHead = () => {
    if (
      this.state.name !== "" &&
      this.state.weight !== "" &&
      this.state.reps !== "" &&
      this.state.sets !== ""
    ) {
      this.setState({ display: true });
    }
  };

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSelect = optionSelected => {
    this.setState({ name: optionSelected.value });
  };

  addWorkout = e => {
    e.preventDefault();
    if (this.state.exercises.length > 0 && this.props.onAdd) {
      console.log(this.state.exercises);
      this.props.onAdd(this.state.exercises);
    }
    this.setState({
      exercises: []
    });
  };

  addExercise = e => {
    e.preventDefault();
    this.setState({
      exercises: [
        ...this.state.exercises,
        {
          name: this.state.name,
          weight: this.state.weight,
          sets: this.state.sets,
          reps: this.state.reps
        }
      ]
    });
    this.setState({ name: "", weight: "", sets: "", reps: "" });
  };

  editExercise = (editedExercise, index) => {
    let exercises = [...this.state.exercises];
    exercises[index] = editedExercise;
    this.setState({
      exercises,
      editing: !this.state.editing,
      exerciseIndex: ""
    });
  };

  deleteExercise = index => {
    const exercises = this.state.exercises;
    exercises.splice(index, 1);
    this.setState({ exercises: exercises });
  };

  render() {
    const formatGroupLabel = data => (
      <div>
        <span>{data.label}</span>
      </div>
    );

    const exercises = this.state.exercises.map((exercise, index) => {
      return (
        <>
          {this.state.editing && this.state.exerciseIndex === index ? (
            <tr key={index}>
              <td>{index + 1}</td>
              <TableForm
                auto
                index={index}
                name={this.state.exercises[index].name}
                weight={this.state.exercises[index].weight}
                sets={this.state.exercises[index].sets}
                reps={this.state.exercises[index].reps}
                onAdd={editedExercise => {
                  this.editExercise(editedExercise, index);
                }}
                onClick={() => this.setEditing(index)}
              />
            </tr>
          ) : (
            <tr key={index}>
              <td>{index + 1}</td>
              <Exercise key={index} {...exercise} />
              <td className="action-buttons">
                <button
                  className="button warning"
                  onClick={() => this.setEditing(index)}
                >
                  Edit
                </button>
                <button
                  className="button danger"
                  onClick={index => this.deleteExercise(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </>
      );
    });

    if (!this.state.adding) {
      return (
        <div
          onClick={() => {
            this.setAdding(true);
          }}
        >
          <button className="add-workout">
            <span className="plus-color">+</span> New Workout
          </button>
        </div>
      );
    }
    let head;

    if (this.state.display) {
      head = (
        <thead>
          <tr>
            <th>#</th>
            <th>Exercise</th>
            <th>Weight</th>
            <th>Sets</th>
            <th>Reps</th>
            <th className="hide">Action</th>
          </tr>
        </thead>
      );
    }

    return (
      <div className="new-workout-section">
        <h1 className="new-header">Today's Workout</h1>
        <table className="table today">
          {head}
          <tbody>{exercises}</tbody>
        </table>
        <form onSubmit={this.addExercise}>
          <div className="row">
            <div className="select-col">
              <div className="form-group">
                <label className="form-label">Exercise</label>
                <Select
                  options={groupedOptions}
                  formatGroupLabel={formatGroupLabel}
                  placeholder="Exercise..."
                  name="name"
                  onChange={this.onSelect}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label className="form-label">Weight</label>
                <div>
                  <input
                    className="form-control"
                    type="number"
                    min="0"
                    name="weight"
                    placeholder="Weight"
                    onChange={this.onChange}
                    value={this.state.weight || ""}
                    required
                  />
                  <div>
                    <span>lbs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sets-reps">
              <div className="form-group">
                <label className="form-label">Sets</label>
                <input
                  className="form-control"
                  type="number"
                  min="0"
                  name="sets"
                  placeholder="Sets"
                  onChange={this.onChange}
                  value={this.state.sets || ""}
                  required
                />
              </div>
            </div>
            <div className="col sets-reps">
              <div className="form-group">
                <label className="form-label">Reps</label>
                <input
                  className="form-control"
                  type="number"
                  min="0"
                  name="reps"
                  placeholder="Reps"
                  onChange={this.onChange}
                  value={this.state.reps || ""}
                  required
                />
              </div>
            </div>

            <div className="col button1 button-row">
              <button
                className="button primary addButton"
                type="submit"
                onClick={this.displayHead}
              >
                Add<span className="hide-text"> Exercise</span>
              </button>
            </div>
            <div className="col button2 button-row">
              <button
                className="button warning"
                onClick={() => {
                  this.setAdding(false);
                  this.setState({
                    exercises: [],
                    name: "",
                    weight: "",
                    sets: "",
                    reps: ""
                  });
                }}
              >
                Cancel<span className="hide-text"> Workout</span>
              </button>
            </div>
          </div>
          <div className="row">
            <button className="finishWorkout" onClick={e => this.addWorkout(e)}>
              Finish Workout
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddWorkoutForm.defaultProps = {
  name: "",
  weight: "",
  sets: "",
  reps: ""
};
