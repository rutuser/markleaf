import { UPDATE_COORDS } from '../actions/map-actions';
import { UPDATE_LOCATION } from '../actions/map-actions';
import { GET_COORDS } from '../actions/map-actions';
import { SET_DIRECTIONS } from '../actions/map-actions';
import { SET_TRAFFIC } from '../actions/map-actions';
import { DIRECTION_TOGGLE } from '../actions/map-actions';


export default function mapReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_COORDS:
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
        zoom: action.payload.zoom
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
        zoom: action.payload.zoom
      }
    case GET_COORDS:
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
        zoom: action.payload.zoom
      }
    case SET_DIRECTIONS:
      return {
        ...state,
        directions: action.payload.directions
      }
    case SET_TRAFFIC:
      return {
        ...state,
        trafficLawyer: action.payload.trafficLawyer
      }
    case DIRECTION_TOGGLE:
      return {
        ...state,
        directionToggle: action.payload.directionToggle
      }
    default:
      return state;
  }
}