import Vue from 'vue'
import App from './App.vue'
import Pace from 'pace-progress'
import router from './router'
//import './highlight'

// window.fetch polyfill
global.fetch = undefined
require('whatwg-fetch')

// start progress bar
Pace.start()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

