import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import map from './components/Map';
import User from './components/User';
import Info from './components/Info';
import Login from './components/Login';

import { Provider } from 'react-redux';

import store from './store/store';


class App extends Component {
	constructor() {
		super();
		this.state = {
			modal: true
		}
	}
	render() {
		if (this.state.modal) {
			return (
				<Login />
			);
		} else {
			return (
				<Provider store={store}>
					<Router>
						<div>
							<Header />
							<Route exact path='/' component={map} />
							<Route path='/User' component={User} />
							<Route path='/Info' component={Info} />
						</div>
					</Router>
				</Provider>
			);
		}
	}
}



export default App;
