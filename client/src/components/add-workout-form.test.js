import React from "react";
import { shallow, mount } from "enzyme";
import { addWorkout } from "../actions";

import AddWorkoutForm from "./AddWorkoutForm.js";

describe("<AddWorkoutForm />", () => {
  it("Renders without crashing", () => {
    shallow(<AddWorkoutForm />);
  });
  it("Renders New Workout button initially", () => {
    const wrapper = shallow(<AddWorkoutForm />);
    expect(wrapper.hasClass("plus-color")).toEqual(false);
  });
  it("Renders Form on click of new Workout", () => {
    const wrapper = shallow(<AddWorkoutForm />);
    wrapper.simulate("click");
    expect(wrapper.state("adding")).toEqual(true);
    expect(wrapper.hasClass("new-workout-section")).toEqual(true);
  });
  it("Should fire addWorkout on click", () => {
    const callback = jest.fn();
    const wrapper = mount(<AddWorkoutForm onAdd={callback} />);
    wrapper.setState({
      exercises: [{ name: "a", weight: "b", sets: "c", reps: "d" }],
      adding: true
    });
    wrapper.find(".finishWorkout").simulate("click");
    expect(callback).toHaveBeenCalledWith([
      { name: "a", weight: "b", sets: "c", reps: "d" }
    ]);
  });
});
