import { FETCH_DATA } from '../actions/header-actions';


export default function headerReducer(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload
    default:
      return state;
  }
}
