import axios from 'axios'
import url from 'url'

export const FETCH_DBS = 'FETCH_DBS'
export const FETCH_DBS_SUCCESS = 'FETCH_DBS_SUCCESS'
export const FETCH_DBS_FAILURE = 'FETCH_DBS_FAILURE'

const ROOT_URL = url.resolve(globals.apiRoot, 'api')

function apiUrl(path) {
  return url.resolve(ROOT_URL, path)
}

function requestDbs() {
  return { type: FETCH_DBS }
}

function receivedDbs(dbs) {
    return {
      type: FETCH_DBS_SUCCESS,
      payload: dbs
    }
}

export function fetchDbs() {
  return function(dispatch) {
    dispatch(requestDbs())
    return axios({
      method: 'get',
      url: apiUrl('api/list_databases')
    }).then((response) => {
      dispatch(receivedDbs(response.data))
    }).catch((response) => {
      console.error(response)
    })
  }
}
