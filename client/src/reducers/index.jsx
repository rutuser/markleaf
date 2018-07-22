import { combineReducers } from 'redux';

import mapReducer from '../reducers/map-reducer';
import infoReducer from '../reducers/info-reducer';
import headerReducer from '../reducers/header-reducer';
import userReducer from '../reducers/user-reducer';
import toggleReducer from '../reducers/toggle-reducer'


export const rootReducer = combineReducers({
    map: mapReducer,
    info: infoReducer,
    header: headerReducer,
    user: userReducer,
    loginToggle: toggleReducer
  });