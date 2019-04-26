import {
  ADD_WORKOUT_SUCCESS,
  addWorkout,
  addWorkoutSuccess,
  FETCH_WORKOUTS_SUCCESS,
  fetchWorkouts,
  fetchWorkoutsSuccess,
  deleteExercise,
  editExercise
} from "./index.js";

import { API_BASE_URL } from "../config";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe("addWorkoutSuccess", () => {
  it("Should return the action", () => {
    const workout = {
      id: "5cc33c0af1cf1c00241f6a8c",
      date: "2019-04-26T17:12:42.066Z",
      exercises: [
        {
          _id: "5cc33c0af1cf1c00241f6a8d",
          name: "Shoulder Press",
          weight: 195,
          sets: 3,
          reps: 5
        }
      ]
    };
    const action = addWorkoutSuccess(workout);
    expect(action.type).toEqual(ADD_WORKOUT_SUCCESS);
    expect(action.workout).toEqual(workout);
  });
});

describe("fetchWorkoutsSuccess", () => {
  it("Should return the action", () => {
    const workouts = {
      id: "5cc33c0af1cf1c00241f6a8c",
      date: "2019-04-26T17:12:42.066Z",
      exercises: [
        {
          _id: "5cc33c0af1cf1c00241f6a8d",
          name: "Shoulder Press",
          weight: 295,
          sets: 300,
          reps: 5
        }
      ]
    };
    const action = fetchWorkoutsSuccess(workouts);
    expect(action.type).toEqual(FETCH_WORKOUTS_SUCCESS);
    expect(action.workouts).toEqual(workouts);
  });
});

describe("async actions", () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it("should post exercises and dispatch ADD_WORKOUT_SUCCESS", () => {
    const body = {
      exercises: { name: "foo", weight: "bar", sets: "bizz", reps: "bang" }
    };

    fetchMock.postOnce(API_BASE_URL, body);

    const expectedActions = {
      type: {
        ADD_WORKOUT_SUCCESS,
        body: {
          exercises: { name: "foo", weight: "bar", sets: "bizz", reps: "bang" }
        }
      },
      type: { FETCH_WORKOUTS_SUCCESS }
    };

    store.dispatch(addWorkout()).then(() => {
      expect(fetchMock.called(API_BASE_URL)).toBe(true);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should return workouts and dispatch FETCH_WORKOUTS_SUCCESS", () => {
    fetchMock.once
  })
});
