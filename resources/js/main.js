import Vue from 'vue'
import App from './App.vue'
import Pace from 'pace-progress'
import VueRouter from 'vue-router'
import Welcome from './components/Welcome'
import Documents from './components/Documents'
import highlight from './filters/highlight'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Welcome },
  {name: 'docs', path: '/documents/:db/:coll/', component: Documents },
  {path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes
})

const filters = {
  highlight
}

// window.fetch polyfill
global.fetch = undefined
require('whatwg-fetch')
const fetch = global.fetch

Pace.start()
new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})

