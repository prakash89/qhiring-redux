import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRoute from './MainRoute';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainRoute />, document.getElementById('root'));
registerServiceWorker();
