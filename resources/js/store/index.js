import Vue from 'vue'
import Vuex from 'vuex'
import dbs from './modules/dbs'
import colls from './modules/colls'
import docs from './modules/docs'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions: {
  },
  modules: {
    dbs,
    colls,
    docs
  },
  strict: debug,
  plugins: debug ? [] : []
})
