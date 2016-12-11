import Vue from 'vue'
import App from './App.vue'
import Pace from 'pace-progress'

Pace.start()
new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})

