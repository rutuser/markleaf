import React, { Component } from 'react';
import MainContainer from './MainContainer';

import { Provider } from 'react-redux';

import store from './store/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
        )
    }
}

export default App;