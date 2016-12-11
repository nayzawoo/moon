import api from './api'

export default {
  fetchDbs(cb, errorCb) {
    return api('api/list_databases', cb, errorCb)
  },
  fetchColls(dbName, cb, errorCb) {
    return api(`api/list_collections/${dbName}`, cb, errorCb)
  }
}
