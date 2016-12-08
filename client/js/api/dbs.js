import api from './api'

export default {
  fetchDbs(cb, errorCb) {
    return api('api/list_databases', cb, errorCb)
  }
}
