import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';

const middleWare = [thunk];

const initialState = {
  map: {
    lat: 0,
    lng: 0,
    zoom: 8,
    directions: {},
    trafficLawyer: false,
    directionToggle: false
  },
  toggleDrawer: false,
  user: {
    name: '',
    password: '',
    signedIn: false
  },
  info: '',
  header: {}
}

const devtools = process.env.NODE_ENV === 'test' ?
  x => x : window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleWare)
  )
);

export default store;