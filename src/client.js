import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './app';

// const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__

// Create Redux store with initial state
// const store = createStore(preloadedState)

// const data = fetch("https://api.spaceXdata.com/v3/launches?limit=100")
// .then(response => response.json()).then(result => {
//     return result;
// })

ReactDOM.hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.querySelector('#root')
);
