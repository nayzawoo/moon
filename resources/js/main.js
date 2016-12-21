import Vue from 'vue'
import App from './App.vue'
import Pace from 'pace-progress'
import router from './router'
import icons from './icons'
//import './highlight'

// window.fetch polyfill
global.fetch = undefined
require('whatwg-fetch')

Vue.prototype.$icons = icons

// start progress bar
Pace.start()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

