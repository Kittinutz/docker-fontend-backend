//set up react client
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from './pages/HomePage';
import Routes from './routes';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import axios from 'axios';
import reducers from './reducers';
import Loadable from 'react-loadable';
const axiosInstance = axios.create(
  {
    baseURL:'/api'
  }
)
const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

Loadable.preloadReady().then(() => {
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
})