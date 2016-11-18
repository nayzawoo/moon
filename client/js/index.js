import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from './pages/Main'
import About from './pages/About'
import App from './components/App'
import store from './store'

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
