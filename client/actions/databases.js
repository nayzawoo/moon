import axios from 'axios'
import url from 'url'

// DB list
export const FETCH_DBS = 'FETCH_DBS'
export const FETCH_DBS_SUCCESS = 'FETCH_DBS_SUCCESS'
export const FETCH_DBS_FAILURE = 'FETCH_DBS_FAILURE'

const ROOT_URL = url.resolve(globals.apiRoot, 'api')

function apiUrl(path) {
  return url.resolve(ROOT_URL, path)
}

export function fetchDbs() {
  const request = axios({
    method: 'get',
    url: apiUrl('api/list_databases')
  })
  return {
    type: FETCH_DBS,
    payload: request
  }
}

export function fetchDbsSuccess(dbs) {
    return {
      type: FETCH_DBS_SUCCESS,
      payload: dbs
    }
}
