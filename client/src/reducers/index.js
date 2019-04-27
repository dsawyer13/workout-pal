import * as actions from "../actions";
export const initialState = {
  workouts: []
};

export const workoutPalReducer = (state = initialState, action) => {
if (action.type === actions.FETCH_WORKOUTS_SUCCESS) {
    return action.workouts;
  }
  return state;
};
