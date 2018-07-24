import { combineReducers } from 'redux';

import mapReducer from './map-reducer';
import infoReducer from './info-reducer';
import headerReducer from './header-reducer';
import userReducer from './user-reducer';


export const rootReducer = combineReducers({
    map: mapReducer,
    info: infoReducer,
    header: headerReducer,
    user: userReducer
  });