import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/main.scss';
import './modules/config';
import { Provider } from 'react-redux' 
import store from './store'
import Router from './router'
import 'antd/dist/antd.css';
//router相关

// ReactDOM.render(
//     <Provider store = {store} >
//         <Router/>
//     </Provider>
// , document.getElementById('root'));

ReactDOM.render(
    <Provider store = {store} >
        <Router/>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();