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
        password: password,
        signedIn: true
    })
}

export const getUser = (User, UserPass) => dispatch => {
    axios.get('/api/user')
    .then(res => res.data.map(user => {
        if((user.name === User) && (user.password === UserPass)) {
            dispatch({
                type: GET_USER,
                payload: {
                    userName: user.name,
                    userPass: user.password,
                    signedIn: user.signedIn
                }
            });
        }
    }))
    .catch(err => () => console.log(err));
    }