import Vue from 'vue'
import Vuex from 'vuex'
import dbs from './modules/dbs'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions: {
  },
  modules: {
    dbs,
  },
  strict: debug,
  plugins: debug ? [] : []
})
