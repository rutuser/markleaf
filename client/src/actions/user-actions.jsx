import axios from 'axios';

export const UPDATE_USER = 'updateUser';
export const POST_USER = 'postUser';
export const GET_USER = 'getUser';


/* 
    Updates de user in the store**
*/
export const updateUser = (name, password) => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload: {
            userName: name,
            userPass: password
        }
    });
}


/* 
    Sends the user data to the database
*/
export const postUser = (name, password) => dispatch => {
    axios.post('https://api.marktleaf.me/api/user', {
        name: name,
        password: password,
        signedIn: true
    })
}


/*
    Gets the user data from the database
 */
export const getUser = (User, UserPass) => dispatch => {
    axios.get('https://api.marktleaf.me/api/user')
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