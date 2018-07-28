import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Directions from '@material-ui/icons/Directions';
import NotIntersented from '@material-ui/icons/NotInterested';
import LocationOn from '@material-ui/icons/LocationOn';
import Traffic from '@material-ui/icons/Traffic';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

import axios from 'axios';

import '../css/bottomNavi.css';

import { connect } from 'react-redux';

import { setToggle } from '../actions/toggle-drawer-actions';
import { getLocation, setDirections, setTrafficLawyer, setDirectionToggle} from '../actions/map-actions';

const styles = {
	PaperProps: {
		background: "rgba(64, 247, 14, 0.3)"
	 },
	 BackdropProps: {
		 background: 'transparent'
	 }
};

const pMargin = {
	marginLeft: '4px',
	fontSize: '10px'
}

const ButtonStyle = {
	border: '0.4px solid black',
	width: '100px',
	height: '100px',
	borderRadius: '20%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
}

class SwipeableTemporaryDrawer extends React.Component {

	constructor() {
		super();

		this.toggleDrawerFalse = this.toggleDrawerFalse.bind(this);
		this.toggleDrawerTrue = this.toggleDrawerTrue.bind(this);
		this.onGetLocation = this.onGetLocation.bind(this);
		this.onSetDirectionToggle = this.onSetDirectionToggle.bind(this);
		this.onSetRoute = this.onSetRoute.bind(this);
		this.onSetTrafficLawyer = this.onSetTrafficLawyer.bind(this);
	}

	toggleDrawerFalse() {
		this.props.onSetToggle(false);
	}

	toggleDrawerTrue() {
		this.props.onSetToggle(true);
	}

	onGetLocation() {
		this.props.onUpdateLocation(11);
	}

	onSetRoute() {
		navigator.geolocation.getCurrentPosition(position => {
			axios.get('/api/coords')
				.then(res => res.data.map(coords => {
					if (coords.user === this.props.userName) {
						this.props.onSetDirection(position.coords.latitude + 0.00001, position.coords.longitude + 0.00001,
							coords.lat, coords.lng);
					}
				}))
				.catch(err => console.log(err));
		});
	}

	onSetDirectionToggle() {
		this.props.onDirectionToggle(this.props.directionToggle);
	}

	onSetTrafficLawyer() {
		this.props.onTrafficLawyer(this.props.trafficLawyer);
	}


	render() {
		const { classes } = this.props;
		return (
			<div>
				<SwipeableDrawer PaperProps={{
              classes: {
                root: classes.PaperProps
              }
			 }}
			 ModalProps={{
				 BackdropProps: {
					 classes: {
						 root: classes.BackdropProps
					 }
				 }
			 }}
					anchor="bottom"
					open={this.props.toggleDrawer}
					onClose={this.toggleDrawerFalse}
					onOpen={this.toggleDrawerTrue}
				>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawerFalse}
						onKeyDown={this.toggleDrawertrue}
					>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', background: '' }}>
							<div className='button'>
								<Button onClick={this.onSetRoute} style={ButtonStyle}>
									<Directions style={{ fontSize: '40' }} />
									<p style={pMargin}>G0</p>
								</Button>
							</div>
							<div className='button'>
								<Button onClick={this.onSetDirectionToggle} style={ButtonStyle}>
									<NotIntersented style={{ fontSize: '40' }} />
									<p style={pMargin}>ST0P</p>
								</Button>
							</div>
							<div className='button'>
								<Button onClick={this.onGetLocation} style={ButtonStyle}>
									<LocationOn style={{ fontSize: '40' }} />
									<p>My Location</p>
								</Button>
							</div>
							<div className='button'>
								<Button onClick={this.onSetTrafficLawyer} style={ButtonStyle}>
									<Traffic style={{ fontSize: '40' }} />
									<p>Traffic status</p>
								</Button>
							</div>
						</div>
					</div>
				</SwipeableDrawer>
			</div>
		);
	}
}

SwipeableTemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired
 };

const mapStateToProps = state => ({
	toggleDrawer: state.toggleDrawer,
	trafficLawyer: state.map.trafficLawyer,
	directionToggle: state.map.directionToggle,
	userName: state.user.name,
});

const mapActionsToProps = {
	onSetToggle: setToggle,
	onUpdateLocation: getLocation,
	onSetDirection: setDirections,
	onTrafficLawyer: setTrafficLawyer,
	onDirectionToggle: setDirectionToggle
}

const DrawerContainer = withStyles(styles)(SwipeableTemporaryDrawer);


export default connect(mapStateToProps, mapActionsToProps)(DrawerContainer);