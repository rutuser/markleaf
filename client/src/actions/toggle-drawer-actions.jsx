export const SET_TOGGLE = 'setToggle';

export const setToggle = (toggle) => dispatch => {
    dispatch({
        type: SET_TOGGLE,
        payload: {
            toggleDrawer: toggle
        }
    });
}