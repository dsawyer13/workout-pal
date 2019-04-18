import React from "react";
import Workout from "./Workout";
import Exercise from "./Exercise"
import AddWorkoutForm from "./AddWorkoutForm";
import Stats from "./Stats";
import { Table, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import "./home-page.css";
import 'react-accessible-accordion/dist/fancy-example.css';

import { addWorkout, deleteExercise, fetchWorkouts } from "../actions";

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts())
  }

  componentDidUpdate(prevProps){
    if(this.props.workouts !== prevProps.workouts) {
      let workouts = this.props.workouts
      this.setState({
        workouts
      })
    }
  }


  addWorkout = exercises => {
    this.props.dispatch(addWorkout(exercises));
  }

  editExercise = () => {
    this.setState({display: true})
  }

  deleteExercise = id => {
    this.props.dispatch(deleteExercise(id));
  }

  render() {
    const workouts = this.props.workouts.map((workout, index) => {
      return(
      <AccordionItem key={index}>
        <AccordionItemHeading>
          <AccordionItemButton>
              <Workout {...workout} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Exercise</th>
                <th>Weight</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
            {workout.exercises && workout.exercises.map((exercise, index) => {
              return(<tr key={index} className="exercise">
                <td>{index+1}</td>
                <Exercise key={index} {...exercise} />
                <td>
                  <Button variant="danger" onClick={id => this.deleteExercise(exercise._id)}>
                    Delete
                  </Button>
                </td>
              </tr>)
            })}
            </tbody>
          </Table>
        </AccordionItemPanel>
      </AccordionItem>
    )});

    return (
      <div className="homePage">
        <h2>Workout Log</h2>
        <Accordion allowZeroExpanded={true}>{workouts}</Accordion>
        <AddWorkoutForm onAdd={exercises => this.addWorkout(exercises)} />
        <Stats />
      </div>
    );
  }
}

HomePage.defaultProps = {
  workouts: [],
}

const mapStateToProps = state => ({
  workouts: state.workouts
});

export default connect(mapStateToProps)(HomePage);
