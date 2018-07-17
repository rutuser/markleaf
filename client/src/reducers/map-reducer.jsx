import { UPDATE_COORDS } from '../actions/map-actions';
import { UPDATE_LOCATION } from '../actions/map-actions';
import { GET_COORDS } from '../actions/map-actions';

export default function mapReducer(state = {}, action) {
    switch(action.type) {
        case UPDATE_COORDS: 
          return action.payload
        case UPDATE_LOCATION:
          return action.payload
        case GET_COORDS:
          return action.payload
        default:
          return state;
    }
  }