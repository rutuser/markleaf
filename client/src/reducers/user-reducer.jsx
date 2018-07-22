import { UPDATE_USER} from '../actions/user-actions';
import { GET_USER } from '../actions/user-actions';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                name: action.payload.userName,
                password: action.payload.userPass
            }
        case GET_USER:
            return {
                ...state,
                name: action.payload.userName,
                password: action.payload.userPass
            }
        default:
            return state;
    }
}