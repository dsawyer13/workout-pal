import { API_BASE_URL } from "../config";

//figure out how to get this posted to the db and state
export const ADD_EXERCISE_SUCCESS = "ADD_EXERCISE_SUCCESS";
export const addExerciseSuccess = (name, weight, sets, reps) => ({
  type: ADD_EXERCISE_SUCCESS,
  name,
  weight,
  sets,
  reps
});

export const addExercise = (id, exercise) => dispatch => {
  fetch(`${API_BASE_URL}/${id}`, {
    method: "put",
    body: exercise
  }).then(res => {
    if (res.ok) {
      dispatch(fetchWorkouts());
    }
  });
};

export const ADD_WORKOUT_SUCCESS = "ADD_WORKOUT_SUCCESS";
export const addWorkoutSuccess = workout => ({
  type: ADD_WORKOUT_SUCCESS,
  workout
});

export const addWorkout = exercises => dispatch => {
  fetch(API_BASE_URL, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ exercises: exercises })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(workout => {
      dispatch(addWorkoutSuccess(workout));
      dispatch(fetchWorkouts());
    });
};

export const FETCH_WORKOUTS_SUCCESS = "FETCH_WORKOUTS_SUCCESS";
export const fetchWorkoutsSuccess = workouts => ({
  type: FETCH_WORKOUTS_SUCCESS,
  workouts
});

export const fetchWorkouts = () => dispatch => {
  fetch(`${API_BASE_URL}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(res => {
      console.log(res);
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      let workouts = { workouts: data };
      dispatch(fetchWorkoutsSuccess(workouts));
    });
};

export const deleteWorkout = id => dispatch => {
  fetch(`${API_BASE_URL}/${id}`, {
    method: "delete"
  }).then(res => {
    if (res.ok) {
      dispatch(fetchWorkouts());
    }
  });
};

export const deleteExercise = id => dispatch => {
  fetch(`${API_BASE_URL}/exercise/${id}`, {
    method: "delete"
  }).then(res => {
    if (res.ok) {
      dispatch(fetchWorkouts());
    }
  });
};
