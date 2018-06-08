import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import Whoops404 from './Whoops404'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
