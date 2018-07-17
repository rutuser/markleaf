import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/index';

const middleWare = [thunk];

const initialState = {
  map: {
    lat: 48.864716,
    lng: 2.349014,
    zoom: 8
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