import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/index';

const middleWare = [thunk];

const initialState = {
  map: {
    lat: 0,
    lng: 0,
    zoom: 8,
    directions: {},
    trafficLawyer: false
  },
  info: '',
  header: {},
  user: 'Michal'
}

const devtools = process.env.NODE_ENV === 'test' ?
  x => x : window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    devtools
  )
);

export default store;