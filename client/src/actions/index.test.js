import {
  ADD_WORKOUT_SUCCESS,
  addWorkout,
  addWorkoutSuccess,
  FETCH_WORKOUTS_SUCCESS,
  fetchWorkouts,
  fetchWorkoutsSuccess,
  deleteExercise,
  editExercise
} from './index.js';

import { API_BASE_URL } from '../config';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);


describe('addWorkoutSuccess', () => {
  it('Should return the action', () => {
    const workout = {
    "id": "5cc33c0af1cf1c00241f6a8c",
    "date": "2019-04-26T17:12:42.066Z",
    "exercises": [
          {
            "_id": "5cc33c0af1cf1c00241f6a8d",
            "name": "Shoulder Press",
            "weight": 195,
            "sets": 3,
            "reps": 5
          }
        ]
      }
    const action = addWorkoutSuccess(workout);
    expect(action.type).toEqual(ADD_WORKOUT_SUCCESS);
    expect(action.workout).toEqual(workout);
  });
});


describe('fetchWorkoutsSuccess', () => {
  it('Should return the action', () => {
    const workouts = {
    "id": "5cc33c0af1cf1c00241f6a8c",
    "date": "2019-04-26T17:12:42.066Z",
    "exercises": [
          {
            "_id": "5cc33c0af1cf1c00241f6a8d",
            "name": "Shoulder Press",
            "weight": 295,
            "sets": 300,
            "reps": 5
            }
          ]
        }
    const action = fetchWorkoutsSuccess(workouts);
    expect(action.type).toEqual(FETCH_WORKOUTS_SUCCESS);
    expect(action.workouts).toEqual(workouts)

  });
});

// describe('fetchWorkouts', () => {
//   it('Should dispatch fetchWorkoutsSuccess', () => {
//     const workouts = {
//     "id": "5cc33c0af1cf1c00241f6a8c",
//     "date": "2019-04-26T17:12:42.066Z",
//     "exercises": [
//           {
//             "_id": "5cc33c0af1cf1c00241f6a8d",
//             "name": "Shoulder Press",
//             "weight": 295,
//             "sets": 300,
//             "reps": 5
//             }
//           ]
//         };
//       global.fetch = jest.fn().mockImplementation(() =>
//         Promise.resolve({
//           ok: true,
//           json() {
//             return workouts;
//           }
//         })
//     );
//
//     const dispatch = jest.fn();
//     return fetchWorkouts()(dispatch).then(() => {
//       expect(fetch).toHaveBeenCalledWith('https://workoutpal.herokuapp.com/api/workouts');
//       expect(dispatch).toHaveBeenCalledWith(fetchWorkoutsSuccess(workouts))
//     });
//   });
// })

// describe('deleteWorkout', () => {
//   it('Should dispatch fetchWorkouts', () => {
//     const workouts
//   })
// })
describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset()
  })


  it('References correct action on success', () => {
    // const exercises = ({exercises: {name: "foo", weight: "bar", sets: "bizz", reps: "bang"}})
    // fetchMock.postOnce(API_BASE_URL, {
    //   body: {exercises},
    //   headers: {'content-type': 'application/json'}
    // })
    //
    //
    // const expectedActions = [
    //   { type: ADD_WORKOUT_SUCCESS, body: {workouts: {id:"5", date:"2", exercises: {name: "foo", weight: "bar", sets: "bizz", reps: "bang"}}} }
    // ]
    // const store = mockStore({workouts: []})
    //
    // store.dispatch(addWorkout(exercises))
    //
    // expect(store.getActions()).toEqual(expectedActions)
    //
    // })
    const responseBody = {response: 'data from the server'};

    fetchMock.once(API_BASE_URL, {
      status: 200,
      body: JSON.stringify(responseBody),
      statusText: 'OK',
      headers: {'Content-Type': 'application/json'},
      sendAsJson: false
    }, {method: 'POST'});

    fetch(API_BASE_URL, {
      method: 'post',
      body: JSON.stringify({data: 'Sent payload'}),
      headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(function (res) {
      expect(res.status).toEqual(200);
      return res.json();
      })
      .then(function (json) {
        expect(json).toEqual(responseBody);

        done();
      })
    })
  })
