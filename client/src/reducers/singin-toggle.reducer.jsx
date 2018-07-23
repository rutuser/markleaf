import { SET_FALSE_SIGNIN_TOGGLE } from '../actions/signin-toggle-actions';
import { SET_TRUE_SIGNIN_TOGGLE } from '../actions/signin-toggle-actions';

export default function signInToggleReducer(state = '', action) {
    switch(action.type) {
        case SET_FALSE_SIGNIN_TOGGLE:
            return false;
        case SET_TRUE_SIGNIN_TOGGLE:
            return true;
        default:
            return state;
    }
}