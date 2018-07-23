export const SET_FALSE_SIGNIN_TOGGLE = 'setFalseSignInToggle';
export const SET_TRUE_SIGNIN_TOGGLE = 'setTrueSignInToggle'

export const setFalseSignInToggle = () => dispatch => {
    dispatch({
        type: SET_FALSE_SIGNIN_TOGGLE
    });
}

export const setTrueSignInToggle = () => dispatch => {
    dispatch({
        type: SET_TRUE_SIGNIN_TOGGLE
    });
}
