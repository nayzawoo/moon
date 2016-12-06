import dbsApi from '../../api/dbs'

const state = {
  dbs: [],
}

// getters
const getters = {
  dbs: state => state.dbs
}

// actions
const actions = {
  fetchDbs({ commit }) {
    dbsApi.fetchDbs(dbs => {
      commit(dbsApi.FETCH_DBS_SUCCESS, { dbs })
    })
  }
}

// mutations
const mutations = {
  [dbsApi.FETCH_DBS_SUCCESS](state, {dbs}) {
    state.dbs = dbs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
