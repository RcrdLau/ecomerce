import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './sass/index.scss'
import Routes from './routes'

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('root'))