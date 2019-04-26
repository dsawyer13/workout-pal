import React from 'react';
import {shallow, mount} from 'enzyme';

import {Workout} from '../Workout.js';

describe('<Workout />', () => {
  it('Renders without crashing', () => {
    shallow(<Workout />);
  });
})
