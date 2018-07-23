export const SET_FALSE_LOGIN_TOGGLE = 'setFalseLogInToggle';
export const SET_TRUE_LOGIN_TOGGLE = 'setTrueLogInToggle'

export const setFalseLogInToggle = () => dispatch => {
    dispatch({
        type: SET_FALSE_LOGIN_TOGGLE
    });
}

export const setTrueLogInToggle = () => dispatch => {
    dispatch({
        type: SET_TRUE_LOGIN_TOGGLE
    });
}
