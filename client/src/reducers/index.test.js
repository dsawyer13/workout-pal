import { workoutPalReducer } from "./index";
import { fetchWorkoutsSuccess } from "../actions";

describe("fetchWorkoutsSuccess", () => {
  const workouts = [
    {
      id: "1",
      date: "2",
      exercises: [
        {
          name: "foo",
          weight: "bar",
          sets: "bizz",
          reps: "bang"
        }
      ]
    }
  ];
  it('Should update the current state with new workouts', () => {
    let state;
    state = workoutPalReducer(state, fetchWorkoutsSuccess({workouts: workouts}))
    expect(state).toEqual({workouts})
  })
});
