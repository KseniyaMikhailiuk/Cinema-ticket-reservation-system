import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore'
import './i18n'

import App from './App';

import './main.scss'

const store = configureStore();
ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);