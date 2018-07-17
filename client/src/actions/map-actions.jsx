import axios from 'axios';

export const UPDATE_COORDS = 'updateCoords';
export const UPDATE_LOCATION = 'updateLocation';
export const GET_COORDS = 'getCoords';


export function updateMapCoords(lat, lng) {
    return {
        type: UPDATE_COORDS,
        payload: {
            lat: lat,
            lng: lng,
            zoom: 9
        }
    }
}

export const getLocation = () => dispatch => {
    navigator.geolocation.getCurrentPosition(position => {
        dispatch({
            type: UPDATE_LOCATION,
            payload: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                zoom: 11
            }
        });
    });
}


export const getCoords = () => dispatch => {
    axios.get('/api/coords')
        .then(res => res.data.map(coords => {
            dispatch({
                type: GET_COORDS,
                payload: {
                    lat: coords.lat,
                    lng: coords.lng,
                    zoom: 15
                }
            })
        }))
        .catch(err => () => console.log(err));
}

export const postCoords = () => dispatch => {
    navigator.geolocation.getCurrentPosition(position => {
        axios.post('/api/coords', {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    });
}


