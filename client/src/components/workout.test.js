import React from 'react';
import {shallow, mount} from 'enzyme';
import {deleteWorkout} from '../actions'

import {Workout} from './Workout.js';


describe('<Workout />', () => {

  it('Renders without crashing', () => {
    shallow(<Workout />);
  });

  it('Renders the correct text', () => {
    const exerciseNum = "foo";
    const setsNum = "bar";
    const repsNum = "bizz";
    const date = "bang";
    const wrapper = mount(<Workout exerciseNum={exerciseNum} setsNum={setsNum} repsNum={repsNum} date={date} />)
    expect(wrapper.contains(<span className="date">{date} </span>))
    expect(wrapper.contains(<span className="exercises">{exerciseNum}<span className="plain"> exercises </span></span>))
    expect(wrapper.contains(<span className="sets">{setsNum}<span className="plain"> sets </span></span>))
    expect(wrapper.contains(<span className="reps">{repsNum}<span className="plain"> reps </span></span>))
  })
  it('Should fire deleteExercise when delete button is clicked', () => {
    const callback = jest.fn();
    const id = 1;
    const wrapper = mount(<Workout dispatch={callback}/>);
    const instance = wrapper.instance();
    instance.deleteWorkout(id)
    expect(callback).toHaveBeenCalled()
  })
})
