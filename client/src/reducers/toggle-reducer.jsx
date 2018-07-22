import { SET_TOGGLE } from '../actions/toggle-actions';

export default function toggleReducer(state = '', action) {
    switch(action.type) {
        case SET_TOGGLE:
            return false
        default:
            return state;
    }
}