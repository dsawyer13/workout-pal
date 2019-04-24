import React from 'react';
import {shallow} from 'enzyme';

import AddWorkoutForm from '../AddWorkoutForm.js';

describe('<AddWorkoutForm />', () => {

  it('Renders without crashing', () => {
    shallow(<AddWorkoutForm />);
  });

});
