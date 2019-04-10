import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default class AddWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: '',
      weight: '',
      sets: '',
      reps: ''
    }
  }

  //change to a public class field syntax???
  setEditing(editing) {
    this.setState({
      editing
    });
  }

  addWorkout() {
    this.props.dispatch(addWorkout());
  }

  onChange(e) {
    e.preventDefault();
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  addExercise(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.weight, this.state.sets, this.state.reps);

    this.setState({name:'', weight: '', sets: '', reps: ''});
  }

  render() {
    if(!this.state.editing) {
      return(
        <div className="add-workout"
        onClick={() =>{
          this.setEditing(true);
          this.addWorkout();
        }}>
          <a href="#">+ New Workout</a>
        </div>
      );
    }
    const exercises = this.props.exercises.map((exercise, _id) => {
      <li key={_id}>
        <Exercise {...exercise} />
      </li>
    })

    return (
      <div>
        <div className="cancel-workout"
        onClick={() => this.setEditing(false)}>
          <a href="#">Cancel</a>
        </div>
        <ul className="exercise-list">
          {exercises}
        </ul>
        <form className="workout-form" onSubmit={this.addExercise}>
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
          <input type="submit" value="Add Exercise">
        </form>
        <input type="button" className="finish-workout" value="Finish Workout">
      </div>
    )
  }
}
