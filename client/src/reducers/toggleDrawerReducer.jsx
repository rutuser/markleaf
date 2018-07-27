import { SET_TOGGLE } from '../actions/toggle-drawer-actions';

export default function toggleHandler(state = '', action) {
    switch(action.type) {
        case SET_TOGGLE:
            return action.payload.toggleDrawer;
        default: 
            return state;
    }
}