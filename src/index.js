import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import store from './store'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'

import Root from '../src/containers/Root'

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
)