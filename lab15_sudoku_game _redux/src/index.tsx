import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {combineReducers, createStore, legacy_createStore} from 'redux'
import reportWebVitals from './reportWebVitals';
import {render} from "@testing-library/react";
import { Provider } from 'react-redux'
import rootReducer from './Reducers';

const store = legacy_createStore(rootReducer)
export  type StoreType=ReturnType<typeof rootReducer>;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
