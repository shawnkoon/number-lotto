import React from 'react';
import ReactDOM from 'react-dom';
import { MainContainer } from './views/Main/Main';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css';
import './assets/css/App.css';

ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
