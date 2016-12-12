import api from './api'

export default {
  fetchDbs(cb, errorCb) {
    return api('api/databases', cb, errorCb)
  },
  fetchColls(dbName, cb, errorCb) {
    return api(`api/collections/${dbName}`, cb, errorCb)
  },
  fetchDocs(dbName, collName, cb, errorCb) {
    return api(`api/documents/${dbName}/${collName}`, cb, errorCb)
  }
}
