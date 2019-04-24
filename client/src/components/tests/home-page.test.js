import React from 'react';
import {shallow} from 'enzyme';

import HomePage from '../HomePage.js';

describe('<HomePage />', () => {
  let exercises = [
    {
      name:"Lateral Raise",
      reps:"5",
      sets:"5",
      weight:"2"
    },
    {
      name:"Lateral Raise",
      reps:"2",
      sets:"1",
      weight:"6"
    }
  ];

  it('Renders without crashing', () => {
    shallow(<HomePage />);
  });

  it('Can add workout to the database', () => {
    const wrapper = shallow(<HomePage />);
    const instance = wrapper.instance();
    instance.addWorkout(exercises);
    expect(wrapper.state('workouts').length).toEqual(exercises.length);
  })
});
