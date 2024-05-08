import React, {ReactNode} from 'react'
import { render } from 'react-dom'
import {combineReducers, createStore, legacy_createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers';


const store = legacy_createStore(rootReducer)
export  type StoreType=ReturnType<typeof rootReducer>;

render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
