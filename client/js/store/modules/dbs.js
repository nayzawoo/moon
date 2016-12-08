import dbsApi from '../../api/dbs'
import * as type from '../mutation-types'

export default {
  state: {
    dbs: [],
    errors: []
  },
  getters: {
    dbs: state => state.dbs,
    errors: state => state.errors,
  },
  actions: {
    fetchDbs({commit}) {
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
    [type.FETCH_DBS_SUCCESS](state, {
      dbs
    }) {
      state.dbs = dbs
    },
    [type.FETCH_DBS_FAILURE](state, {
      errors
    }) {
      state.errors = errors
    }
  }
}
