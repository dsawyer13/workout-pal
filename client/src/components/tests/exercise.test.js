import React from 'react';
import {shallow} from 'enzyme';

import Exercise from '../Exercise.js';

describe('<Exercise />', () => {
  it('Renders without Crashing', () => {
    shallow(<Exercise name="name" weight="50" sets="5" reps="5" />);
});

  it('Renders the text', () => {
    const name = "foo";
    const weight = "bar";
    const sets = "bizz";
    const reps = "bang";
    const wrapper = shallow(<Exercise name={name} weight={weight} sets={sets} reps={reps} />);
    expect(wrapper.contains(<td className="name">{name}</td>))
    expect(wrapper.contains(<td className="weight">{weight}</td>))
    expect(wrapper.contains(<td className="sets">{sets}</td>))
    expect(wrapper.contains(<td className="reps">{reps}</td>))
  })
})
