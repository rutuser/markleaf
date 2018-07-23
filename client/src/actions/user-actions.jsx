import axios from 'axios';

export const UPDATE_USER = 'updateUser';
export const POST_USER = 'postUser';
export const GET_USER = 'getUser';


export const updateUser = (name, password) => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload: {
            userName: name,
            userPass: password
        }
    });
}

export const postUser = (name, password) => dispatch => {
    axios.post('/api/user', {
        name: name,
        password: password
    })
}

export const getUser = (User) => dispatch => {
    var pass = false;
    axios.get('/api/user')
    .then(res => res.data.map(user => {
        if(user === User) {
            pass = true;
            dispatch({
                type: GET_USER,
                payload: {
                    userName: user.name,
                    userPass: user.password
                }
            });
        }
    }))
    .catch(err => () => console.log(err));
    return pass;
}