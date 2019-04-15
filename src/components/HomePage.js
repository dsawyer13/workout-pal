import React from "react";
import Workout from "./Workout";
import Exercise from "./Exercise";
import AddWorkoutForm from "./AddWorkoutForm";
import Stats from "./Stats";
import { connect } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import "./home-page.css";

import { addWorkout, deleteExercise, fetchWorkouts } from "../actions";

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts());
  }

  addWorkout(exercises) {
    this.props.dispatch(addWorkout(exercises));
  }

  deleteExercise = id => {
    this.props.dispatch(deleteExercise(id));
  };

  render() {
    const workouts = this.props.workouts.map((workout, index) => (
      <AccordionItem key={index}>
        <AccordionItemHeading>
          <AccordionItemButton>
            <Workout {...workout} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {workout.exercises.map((exercise, index) => (
            <>
              <Exercise key={index} {...exercise} />
              <input
                type="button"
                value="X"
                onClick={id => this.deleteExercise(exercise._id)}
              />
            </>
          ))}
        </AccordionItemPanel>
      </AccordionItem>
    ));

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

const mapStateToProps = state => ({
  workouts: state.workouts
});

export default connect(mapStateToProps)(HomePage);
