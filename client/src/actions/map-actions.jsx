import axios from 'axios';

export const UPDATE_COORDS = 'updateCoords';
export const UPDATE_LOCATION = 'updateMyLocation';
export const GET_COORDS = 'getCoords';
export const SET_DIRECTIONS = 'setDirections';
export const SET_TRAFFIC = 'setTraffic';
export const DIRECTION_TOGGLE = 'directionToggle';



/*
    Updates the map coords (center)
*/
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


/*
    Set te traffic status using some toggle stuff
*/
export const setTrafficLawyer = (trafficLawyer) => dispatch => {
    dispatch({
        type: SET_TRAFFIC,
        payload: {
            trafficLawyer: !trafficLawyer
        }
    });
}


/*
    Toggle the Direction render in the map component
 */
export const setDirectionToggle = (directionToggle) => dispatch => {
    dispatch({
        type: DIRECTION_TOGGLE,
        payload: {
            directionToggle: !directionToggle
        }
    });
}


/* 
    Gets the current location in your device, setting it in the map component
*/
export const getLocation = (zoom) => dispatch => {
    navigator.geolocation.getCurrentPosition(position => {
        dispatch({
            type: UPDATE_LOCATION,
            payload: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                zoom: zoom
            }
        });
    });
}


/*
    Gets the location from the database / backend
*/
export const getCoords = (userName) => dispatch => {
    axios.get('https://api.marktleaf.me/api/coords')
        .then(res => res.data.map(coords => {
            if(coords.user === userName) {
                dispatch({
                    type: GET_COORDS,
                    payload: {
                        lat: coords.lat,
                        lng: coords.lng,
                        zoom: 15
                    }
                });
            }
        }))
        .catch(err => () => console.log(err));
}


/* 
    Sends your car location to the database
*/
export const postCoords = (userName) => dispatch => {
    navigator.geolocation.getCurrentPosition(position => {
        axios.post('https://api.marktleaf.me/api/coords', {
            user: userName,
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    });
}


/*
    Sets the direction render from the data in our database of the car, to your current location
*/
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


