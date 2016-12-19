import fetchApi from '../../api/fetch'
import {set} from 'vue'
import * as type from '../mutation-types'

export default {
  state: {
    fetchingDocs: false,
    docs: {},
    docsErrors: {}
  },
  getters: {
    fetchingDocs: state => state.fetchingDocs,
    docs: state => state.docs,
    docsByKey: state => dbName => {
      return state.docs[dbName]
    },
    docsErrors: state => state.docsErrors,
  },
  actions: {
    fetchDocs({commit}, {db, coll}) {
      commit(type.FETCHING_DOCS)
      fetchApi.fetchDocs(db, coll, docs => {
        commit(type.FETCH_DOCS_SUCCESS, docs)
      }, (errors) => {
        commit(type.FETCH_DOCS_FAILURE, errors)
      })
    }
  },
  mutations: {
    [type.FETCHING_DOCS](state) {
      state.errors = {}
      state.fetchingDocs = true
    },

    [type.FETCH_DOCS_SUCCESS](state, response) {
      state.docs = {}
      for (var i = 0; i < response.length; i++) {
        set(state.docs, response[i].id, response[i].data)
      }
      state.errors = {}
      state.fetchingDocs = false
    },

    [type.FETCH_DOCS_FAILURE](state, errors) {
      state.errors = errors
      state.fetchingDocs = false
    }
  }
}
