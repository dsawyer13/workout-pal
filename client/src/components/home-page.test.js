import React from 'react';
import {shallow, mount} from 'enzyme';
import AddWorkoutForm from './AddWorkoutForm'
import Workout from './Workout'
import Exercise from './Exercise'
import TableForm from './TableForm'
import {
  addWorkout,
  deleteExercise,
  editExercise,
  fetchWorkouts
} from "../actions";

import ConnectedHomePage, { HomePage } from './HomePage';

const mockFetchWorkouts = {
  type: "FETCH_WORKOUTS"
};
jest.mock('../actions', () => Object.assign({},
  require.requireActual('../actions'),
  {
    fetchWorkouts: jest.fn().mockImplementation(() => {
      return mockFetchWorkouts;
    })
  }
));

describe('<HomePage />', () => {
  let workouts = [];
  beforeAll(() => {
    for (let i=0; i<5; i++) {
      workouts.push({
        id: i,
        date: i,
        exercises: [{
          _id: 1,
          date: 2,
          weight: 1,
          sets: 2,
          reps: 3
        }]
      })
    }
  });

  it('Renders without crashing', () => {
    const dispatch = jest.fn()
    mount(<HomePage workouts={[]} dispatch={dispatch}/>);
  })

  it('Dispatches fetchWorkouts on mount', () => {
    const dispatch = jest.fn();
    shallow(<HomePage workouts={[]} dispatch={dispatch} />);
    expect(dispatch).toHaveBeenCalledWith(mockFetchWorkouts)
  })

})
