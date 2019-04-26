import React from 'react';
import {shallow} from 'enzyme';

import {Workout} from '../Workout.js';


describe('<Workout />', () => {
  it('Renders without crashing', () => {
    shallow(<Workout />);
  });

  it('Renders the correct text', () => {
    const exerciseNum = "foo";
    const setsNum = "bar";
    const repsNum = "bizz";
    const date = "bang";
    const wrapper = shallow(<Workout exerciseNum={exerciseNum} setsNum={setsNum} repsNum={repsNum} date={date} />)
    expect(wrapper.contains(<span className="date">{date} </span>))
    expect(wrapper.contains(<span className="exercises">{exerciseNum}<span className="plain"> exercises </span></span>))
    expect(wrapper.contains(<span className="sets">{setsNum}<span className="plain"> sets </span></span>))
    expect(wrapper.contains(<span className="reps">{repsNum}<span className="plain"> reps </span></span>))

  })
})
