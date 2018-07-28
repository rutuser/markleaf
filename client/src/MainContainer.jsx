import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import map from './components/Map';
import User from './components/User';
import Info from './components/Info';
import Login from './components/Login';
import ModalContainer from './components/Modal';
import SwipeableTemporaryDrawer from './components/BottomNavi';

import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

import { connect } from 'react-redux';

import { setToggle } from './actions/toggle-drawer-actions';


class MainContainer extends Component {

	constructor(props) {
		super(props);

		this.toggleHandler = this.toggleHandler.bind(this);
	}

	toggleHandler() {
		this.props.onSetToggle(!this.props.toggleDrawer);
	}

	render() {
		if (!this.props.signedIn) {
			return <Login />
		} else {
			return (
				<Router>
					<div>
						<Header />
						<ModalContainer />
						<Route exact path='/' component={map} />

						<Route path='/User' component={User} />
						<Route path='/Info' component={Info} />
						<SwipeableTemporaryDrawer />
						<button style={{
							background: 'transparent',
							border: '0px',
							height: '40px',
							position: 'absolute',
							bottom: '0px',
							right: '47vw'
						}} onClick={this.toggleHandler} ><KeyboardArrowUp style={{color: '#eee'}} /></button>
					</div>
				</Router>
			);
		}
	}
}

const mapStateToProps = state => ({
	signedIn: state.user.signedIn,
	toggleDrawer: state.toggleDrawer
});

const mapActionsToProps = {
	onSetToggle: setToggle
}


export default connect(mapStateToProps, mapActionsToProps)(MainContainer);