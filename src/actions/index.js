import {API_BASE_URL} from '../config';


//figure out how to get this posted to the db and state
export const ADD_EXERCISE_SUCCESS;
export const addExerciseSuccess = (name, weight, sets, reps) => ({
  type: ADD_EXERCISE_SUCCESS,
  name,
  weight,
  sets,
  reps
});

export const addExercise = (id) => {
  fetch(`${API_BASE_URL}/`)
}

export const ADD_WORKOUT_SUCCESS;
export const addWorkoutSuccess = workout => ({
  type: ADD_WORKOUT_SUCCESS,
  workout
})

export const addWorkout = exercises => dispatch => {
  fetch(`${API_BASE_URL}/workouts`, {
    method: 'post',
    body: {exercises: exercises}
  })
  .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
  })
  .then(workout => {
    dispatch(addWorkoutSuccess(workout))
  })
}

export const FETCH_WORKOUTS_SUCCESS = 'FETCH_WORKOUTS_SUCCESS';
export const fetchWorkoutsSuccess = (workouts) => ({
  type: FETCH_WORKOUTS_SUCCESS,
  workouts
})

export const fetchWorkouts = () => {
  fetch(`${API_BASE_URL}/workouts`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(workouts => {
      dispatch(fetchWorkoutsSuccess(workouts))
    })
}
