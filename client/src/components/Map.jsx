import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import * as MapStyle from '../css/map.css';
import * as ENV from '../config/env.ts';

import { connect } from 'react-redux';

import { updateMapCoords } from '../actions/map-actions';


const style = {
    width: '100vw',
	height: '92.8vh'
}



class MapContainer extends Component {

	constructor(props) {
		super(props);
		this.onMapClick = this.onMapClick.bind(this);
	}

	onMapClick() {
		this.props.onUpdateCoords(48.864716, 2.349014);
	}


	componentWillMount() {
		this.props.onUpdateCoords(48.148598, 17.107748);
	}


    render() {
        return(
            <Map google={this.props.google}
				style={style}
				center={{
					lat: this.props.mapLat,
					lng: this.props.mapLng
				}}
				zoom={this.props.mapZoom}
				onClick={this.onMapClick}
			>
            <Marker position={{lat: this.props.mapLat, lng: this.props.mapLng}} />
			</Map>
        );
    }
}

const WrappedContainer = GoogleApiWrapper({
	apiKey: 'AIzaSyA3ZJbujACSYHgvYWSeDxNvrgg_DqMVE7w'
})(MapContainer);

const mapActionsToProps = {
	onUpdateCoords: updateMapCoords,
}

const mapStateToProps = state => ({
	mapLat: state.map.lat,
	mapLng: state.map.lng,
	mapZoom: state.map.zoom,
	map: state.map
})

export default connect(mapStateToProps, mapActionsToProps)(WrappedContainer);