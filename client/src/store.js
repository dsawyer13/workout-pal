import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import {workoutPalReducer} from './reducers';

let createStoreWithMiddleware = applyMiddleware(thunk)( createStore );
let store = createStoreWithMiddleware( workoutPalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;
