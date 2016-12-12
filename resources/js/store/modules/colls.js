import fetchApi from '../../api/fetch'
import {set} from 'vue'
import * as type from '../mutation-types'

export default {
  state: {
    fetchingColls: false,
    colls: {},
    collsErrors: {}
  },
  getters: {
    fetchingColls: state => state.fetchingColls,
    colls: state => state.colls,
    collsByDb: state => dbName => {
      return state.colls[dbName]
    },
    collsErrors: state => state.collsErrors,
  },
  actions: {
    fetchColls({commit}, dbName) {
      commit(type.FETCHING_COLLS)
      fetchApi.fetchColls(dbName, colls => {
        commit(type.FETCH_COLLS_SUCCESS, colls)
      }, (errors) => {
        commit(type.FETCH_COLLS_FAILURE, errors)
      })
    }
  },
  mutations: {
    [type.FETCHING_COLLS](state) {
      state.errors = {}
      state.fetchingColls = true
    },

    [type.FETCH_COLLS_SUCCESS](state, response) {
      set(state.colls, response.db, response.colls)
      state.errors = {}
      state.fetchingColls = false
    },

    [type.FETCH_COLLS_FAILURE](state, errors) {
      state.errors = errors
      state.fetchingColls = false
    }
  }
}
