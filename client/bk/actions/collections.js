import axios from 'axios'
import url from 'url'

export const FETCH_COLS = 'FETCH_COLS'
export const FETCH_COLS_SUCCESS = 'FETCH_COLS_SUCCESS'
export const FETCH_COLS_FAILURE = 'FETCH_COLS_FAILURE'

const ROOT_URL = url.resolve(globals.apiRoot, 'api')

function apiUrl(path) {
  return url.resolve(ROOT_URL, path)
}

function requestCols() {
  return { type: FETCH_COLS }
}

function receivedCols(cols) {
    return {
      type: FETCH_COLS_SUCCESS,
      payload: cols
    }
}

export function fetchCols(dbName) {
  return function(dispatch) {
    dispatch(requestCols())
    return axios({
      method: 'get',
      url: apiUrl(`api/list_collections/${dbName}`)
    }).then((response) => {
      dispatch(receivedCols(response.data))
    }).catch((response) => {
      console.error(response)
    })
  }
}
