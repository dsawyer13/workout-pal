import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Exercise} from './Exercise';


export class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      exercises: []
    }
  }

  setEditing = (editing) => {
    this.setState({
      editing
    });
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  onClick = (e) => {
    e.preventDefault();
    if (this.state.exercises && this.props.onAdd) {
      this.props.onAdd(this.state.exercises);
    }
    this.setState({exercises: []})
  }

  addExercise = (e) => {
    e.preventDefault();
    this.setState({exercises: [...this.state.exercises, {
      name: this.state.name,
      weight: this.state.weight,
      sets: this.state.sets,
      reps: this.state.reps
      }]
    });
  }

  removeExercise = (index) => {
    const exercises = this.state.exercises;
    exercises.splice(index, 1);
    this.setState({exercises: exercises});
  }


  render() {
    const exercises = this.state.exercises.map((exercise, index) => (
      <li key={index}>
        <Exercise {...exercise} />
        <input type="button" value="delete" onClick={index => this.removeExercise(index)} />
      </li>
    ));

    if(!this.state.editing) {
      return(
        <div className="add-workout"
        onClick={() =>{this.setEditing(true)}}>
          <a href="#">+ New Workout</a>
        </div>
      );
    }

    return (
      <div className="new-workout-section">
        <div className="cancel-workout"
        onClick={() => {
          this.setEditing(false);
          this.setState({exercises: []});}}>
          <a href="#">Cancel</a>
        </div>

        <ul className="exercise-list">
          {exercises}
        </ul>

        <form className="workout-form" addExercise={this.addExercise}>
          <label>Exercise:
            <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
          </label>
          <label>Weight(lbs):
            <input type="number" name="weight" onChange={this.onChange} value={this.state.weight} />
          </label>
          <label>Sets:
            <input type="number" name="sets" onChange={this.onChange} value={this.state.sets} />
          </label>
          <label>Reps:
            <input type="number" name="reps" onChange={this.onChange} value={this.state.reps} />
          </label>
          <input type="submit" value="Add Exercise" />
        </form>
        <input type="button" className="finish-workout" value="Finish Workout" onClick={this.onClick} />
      </div>
    )
  }
}

AddWorkoutForm.defaultProps = {
  name: '',
  weight: '',
  sets: '',
  reps: ''
};
