import dbsApi from '../../api/dbs'
import * as type from '../mutation-types'

export default {
  state: {
    fetchingDbs: false,
    dbs: [],
    errors: {}
  },
  getters: {
    fetchingDbs: state => state.fetchingDbs,
    dbs: state => state.dbs,
    errors: state => state.errors,
  },
  actions: {
    fetchDbs({commit}) {
      commit(type.FETCHING_DBS, {})
      dbsApi.fetchDbs(dbs => {
        commit(type.FETCH_DBS_SUCCESS, {
          dbs
        })
      }, (errors) => {
        commit(type.FETCH_DBS_FAILURE, {
          errors
        })
      })
    }
  },
  mutations: {
    [type.FETCHING_DBS](state, {}) {
      state.errors = {}
      state.dbs = []
      state.fetchingDbs = true
    },

    [type.FETCH_DBS_SUCCESS](state, {
      dbs
    }) {
      state.dbs = dbs
      state.errors = {}
      state.fetchingDbs = false
    },

    [type.FETCH_DBS_FAILURE](state, {
      errors
    }) {
      state.errors = errors
      state.fetchingDbs = false
    }
  }
}
