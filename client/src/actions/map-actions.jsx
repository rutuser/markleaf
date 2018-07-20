import axios from 'axios';

export const UPDATE_COORDS = 'updateCoords';
export const UPDATE_LOCATION = 'updateMyLocation';
export const GET_COORDS = 'getCoords';
export const SET_DIRECTIONS = 'setDirections';
export const SET_TRAFFIC = 'setTraffic';




export const updateMapCoords = (lat, lng) => dispatch => {
    dispatch({
        type: UPDATE_COORDS,
        payload: {
            lat: lat,
            lng: lng,
            zoom: 9
        }
    });
}

export const setTrafficLawyer = (trafficLawyer) => dispatch => {
    dispatch({
        type: SET_TRAFFIC,
        payload: {
            trafficLawyer: !trafficLawyer
        }
    });
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

export const setDirections = (myLat, myLng, carLat, carLng) => dispatch => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route({
        origin: new window.google.maps.LatLng(myLat, myLng),
        destination: new window.google.maps.LatLng(carLat, carLng),
        travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
            dispatch({
                type: SET_DIRECTIONS,
                payload: {
                    directions: result
                }
            });
        } else {
            alert(`error fetching directions ${result}`);
        }
    });
}


