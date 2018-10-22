import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import store from './store'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'

import App from '../src/containers/App'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)