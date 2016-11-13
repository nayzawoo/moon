import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Main from './pages/Main'
import About from './pages/About'
import App from './components/App'

let store = window.store = createStore(function(state, action) {
  console.log(state, action)
})

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path='about' component={About}></Route>
    </Route>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>
, document.getElementById('root'))
