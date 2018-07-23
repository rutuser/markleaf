import { SET_FALSE_LOGIN_TOGGLE } from '../actions/login-toggle-actions';
import { SET_TRUE_LOGIN_TOGGLE } from '../actions/login-toggle-actions';

export default function logInToggleReducer(state = '', action) {
    switch(action.type) {
        case SET_FALSE_LOGIN_TOGGLE:
            return false;
        case SET_TRUE_LOGIN_TOGGLE:
            return true;
        default:
            return state;
    }
}