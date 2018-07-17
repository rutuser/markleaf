import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from '../src/cache/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
