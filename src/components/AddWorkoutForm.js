import React from "react";
import Exercise from "./Exercise.js";
import { Form, Col, Row, Button, InputGroup, Table } from 'react-bootstrap';
import Select from 'react-select';
import { groupedOptions } from '../data.js';


export default class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      exercises: [],
      display: false
    };
  }


  setEditing = editing => {
    this.setState({
      editing
    });
  };

  displayHead = () => {
    this.setState({display: true});
  }

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSelect = (optionSelected) => {
    this.setState({name: optionSelected.label})
  }

  addWorkout = e => {
    e.preventDefault();
    if (this.state.exercises && this.props.onAdd) {
      this.props.onAdd(this.state.exercises);
    }
    this.setState({ exercises: [] });
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

    const exercises = this.state.exercises.map((exercise, index) => (
      <tr className="exercise">
        <td>{index+1}</td>
        <Exercise  key={index} {...exercise} />
        <Button type="danger" onClick={index => this.deleteExercise(index)}>
          Delete
        </Button>
      </tr>
    ));

    if (!this.state.editing) {
      return (
        <div
          className="add-workout"
          onClick={() => {
            this.setEditing(true);
          }}
        >
          <Button variant="success">+ New Workout</Button>
        </div>
      );
    }
    let head;

    if (this.state.display) {
      head = (
        <thead>
          <th>#</th>
          <th>Exercise</th>
          <th>Weight</th>
          <th>Sets</th>
          <th>Reps</th>
        </thead>)
    }

    return (
      <div className="new-workout-section">
        <Table striped bordered hover>
          {head}
          <tbody>
            {exercises}
          </tbody>
        </Table>
        <Form onSubmit={this.addExercise}>
          <Row>
            <Col>
              <Form.Group>
              <Form.Label>Exercise</Form.Label>
                <Select
                  options={groupedOptions}
                  formatGroupLabel={formatGroupLabel}
                  placeholder="Exercise..."
                  name="name"
                  onChange={this.onSelect}
                 />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Weight</Form.Label>
                <InputGroup>
                  <Form.Control type="number" name="weight" placeholder="Weight" onChange={this.onChange} value={this.state.weight || ""} />
                  <InputGroup.Append>
                    <InputGroup.Text id="inputGroupPrepend">lbs</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Sets</Form.Label>
                <Form.Control type="number" name="sets" placeholder="Sets" onChange={this.onChange} value={this.state.sets || ""} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Reps</Form.Label>
                <Form.Control type="number" name="reps" placeholder="Reps" onChange={this.onChange} value={this.state.reps || ""} />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit" onClick={this.displayHead}>
                Add Exercise
              </Button>
            </Col>
            <Col>
              <Button variant="warning"
                className="cancel-workout"
                onClick={() => {
                  this.setEditing(false);
                  this.setState({ exercises: [] });
                }}
              >
                Cancel Workout
              </Button>
            </Col>
          </Row>
          <Row>
            <Button variant="primary" size="lg" block onClick={this.onSubmit}>
              Finish Workout
            </Button>
          </Row>
        </Form>
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
