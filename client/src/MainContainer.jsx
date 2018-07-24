import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import map from './components/Map';
import User from './components/User';
import Info from './components/Info';
import Login from './components/Login';
import ModalContainer from './components/Modal';

import { connect } from 'react-redux';


class MainContainer extends Component {
	render() {
		 if(!this.props.signedIn) {
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
					</div>
				</Router>
			);
		}
	}
}

const mapStateToProps = state => ({
    signedIn: state.user.signedIn
});


export default connect(mapStateToProps)(MainContainer);