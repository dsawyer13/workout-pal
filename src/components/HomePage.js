import React from 'react';
import Workout from './Workout';
import Exercise from './Exercise';
import AddWorkoutForm from './AddWorkoutForm';
import Stats from './Stats';
import {connect} from 'react-redux';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

import {addWorkout, fetchWorkouts} from '../actions';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts());
  }

  addWorkout(exercises) {
    this.props.dispatch(addWorkout(exercises));
  }

  render() {
    // const exercises = this.props.exercises.map((exercise, index) =>
    //     <li key={index}>
    //       <Exercise {...exercise} />
    //       <input type="button" value="X" onClick={index => this.removeExercise(index)} />
    //     </li>
    //   );

    const workouts = this.props.workouts.map((workout) =>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <Workout {...workout} />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {workout.exercises.map((exercise) =>
              <Exercise {...exercise} />
            )}
          </AccordionItemPanel>
        </AccordionItem>
      )

    return (
      <div className="homePage">
        <h2>Workout Log</h2>
          <Accordion allowZeroExpanded={true}>
            {workouts}
          </Accordion>
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
