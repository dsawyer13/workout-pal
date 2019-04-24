import React from 'react';
import {shallow} from 'enzyme';

import {Workout} from '../Workout.js';

describe('<Workout />', () => {
  it('Renders without crashing', () => {
    shallow(<Workout />);
  });
})
