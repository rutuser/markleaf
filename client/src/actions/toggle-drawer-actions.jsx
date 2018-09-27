export const SET_TOGGLE = 'setToggle';

/* 
    Toggle the Bottom Navi bar 
*/
export const setToggle = (toggle) => dispatch => {
    dispatch({
        type: SET_TOGGLE,
        payload: {
            toggleDrawer: toggle
        }
    });
}