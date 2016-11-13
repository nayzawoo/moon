import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Main from './pages/Main'
import About from './pages/About'
import App from './components/App'


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main}></IndexRoute>
			<Route path='about' component={About}></Route>
		</Route>
	</Router>
, document.getElementById('root'))
