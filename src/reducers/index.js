import * as actions from '../actions';

const initialState = {
  workouts: []
};

export const workoutReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_WORKOUT_SUCCESS) {
    return Object.assign({}, state, {
      workouts: [...state.workouts, {
        id: action.id,
        date: action.date,
        finished: action.finished,
        exercises: action.exercises
      }]
    });
  }
  // else if (action.type === actions.REMOVE_WORKOUT_SUCCESS) {
  //   return
  // }
  // else if (action.type === actions.EDIT_WORKOUT_SUCCESS) {
  //   return
  // }
  // else if (action.type === actions.ADD_EXERCISE_SUCCESS) {
  //   return
  //   }
  //  else if (action.type == actions.EDIT_EXERCISE_SUCCESS) {
  //    return
  //  }
  //  else if (action.type === actions.DELETE_EXERCISE_SUCCESS) {
  //    return
  //  }
  //  else if (action.type === actions.CANCEL_EDIT_SUCCESS) {
  //    return
  //   }
    else if (action.type === actions.FETCH_WORKOUTS_SUCCESS) {
      let newState = workouts: action.workouts
      return
    }
    return state;
};
