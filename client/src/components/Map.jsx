import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer, TrafficLayer } from "react-google-maps"
import { compose, withProps } from "recompose"

import { connect } from 'react-redux';

import { updateMapCoords, setDirections, getLocation } from '../actions/map-actions';



const MapWrapper = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCH7NKFsK_MXS6urT3l8fYuYB9EDHPcHXU&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: `100vh`}} />,
		containerElement: <div style={{ height: `92vh` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)
	((props) =>
		<GoogleMap
			zoom={props.zoom}
			center={{ lat: props.lat, lng: props.lng }}
			onClick={props.onMapClick}
		>
			{<Marker options={{ icon: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Ball-Chartreuse-icon.png' }} position={{ lat: props.lat, lng: props.lng }} onClick={props.onMarkerClick} />}

			{props.directionToggle && <DirectionsRenderer directions={props.directions} />}
			{props.trafficLayer && <TrafficLayer autoUpdate />}
		</GoogleMap>
	)



class Map extends Component {

	constructor(props) {
		super(props);

	}


	componentDidMount() {
		this.props.onGetLocation(10);
	}

	render() {
		return (
			<MapWrapper
				lat={this.props.mapLat}
				lng={this.props.mapLng}
				zoom={this.props.mapZoom}
				onMapClick={this.onMapClick}
				onMarkerClick={this.onMarkerClick}
				directions={this.props.mapDirections}
				trafficLayer={this.props.trafficLawyer}
				directionToggle={this.props.directionToggle}
			/>

		)
	}
}

const mapActionsToProps = {
	onUpdateCoords: updateMapCoords,
	onSetDirections: setDirections,
	onGetLocation: getLocation
}

const mapStateToProps = state => ({
	mapLat: state.map.lat,
	mapLng: state.map.lng,
	mapZoom: state.map.zoom,
	mapDirections: state.map.directions,
	map: state.map,
	trafficLawyer: state.map.trafficLawyer,
	directionToggle: state.map.directionToggle
})

export default connect(mapStateToProps, mapActionsToProps)(Map);