import * as actions from "../actions";
export const initialState = {
  workouts: []
};

export const workoutPalReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_WORKOUT_SUCCESS) {
    return Object.assign({}, state, {
      workouts: [
        ...state.workouts,
        {
          id: action.id,
          date: action.date,
          finished: action.finished,
          exercises: action.exercises
        }
      ]
    });
  } else if (action.type === actions.FETCH_WORKOUTS_SUCCESS) {
    return action.workouts;
  }
  return state;
};
