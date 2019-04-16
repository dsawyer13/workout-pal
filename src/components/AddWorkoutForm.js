import React from "react";
import Exercise from "./Exercise.js";
import TableForm from "./TableForm.js";
import { Form, Col, Row, Button, InputGroup, Table } from 'react-bootstrap';
import Select from 'react-select';
import { groupedOptions } from '../data.js';


export default class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      exercises: [],
      display: false,
      editing: false,
      name: "",
      weight: "",
      sets: "",
      reps: ""
    };
  }

  setEditing = () => {
    this.setState({editing: true});
  }

  setAdding = adding => {
    this.setState({
      adding
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

    const exercises = this.state.exercises.map((exercise, index) => {
      console.log(index)
      if (!this.state.editing) {
        return (<tr className="exercise">
            <td>{index+1}</td>
            <Exercise  key={index} {...exercise} />
            <Button variant="warning" onClick={this.setEditing}>
              Edit
            </Button>
            <Button variant="danger" onClick={index => this.deleteExercise(index)}>
              Delete
            </Button>
          </tr>)
        } else {
          return (
            
            <tr>

              <td>{index+1}</td>
              <TableForm
                index={index}
                name={this.state.exercises[index].name}
                weight={this.state.exercises[index].weight}
                sets={this.state.exercises[index].sets}
                reps={this.state.exercises[index].reps}
              />
            </tr>

          )
        }
      });

    if (!this.state.adding) {
      return (
        <div
          className="add-workout"
          onClick={() => {
            this.setAdding(true);
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
          <tr>
            <th>#</th>
            <th>Exercise</th>
            <th>Weight</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Action</th>
          </tr>
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
                  required
                 />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Weight</Form.Label>
                <InputGroup>
                  <Form.Control type="number" name="weight" placeholder="Weight" onChange={this.onChange} value={this.state.weight || ""} required
                    onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    maxLength="5"/>
                  <InputGroup.Append>
                    <InputGroup.Text id="inputGroupPrepend">lbs</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Sets</Form.Label>
                <Form.Control type="number" name="sets" placeholder="Sets" onChange={this.onChange} value={this.state.sets || ""} required
                  onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  maxLength="5" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Reps</Form.Label>
                <Form.Control type="number" name="reps" placeholder="Reps" onChange={this.onChange} value={this.state.reps || ""} required
                  onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  maxLength="5"/>
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
