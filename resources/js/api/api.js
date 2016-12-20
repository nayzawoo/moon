import isFunction from 'lodash/isFunction'
import isString from 'lodash/isString'

function getEndpoint(path) {
  // remove duplicate slashes
  return (`${globals.apiRoot}/${path}`).replace(/([^:]\/)\/+/g, '/')
}

/**
 * Backend Api Request Wrapper
 * @param  {[type]} uri     [description]
 * @param  {Object} options [description]
 * @return {[type]}         [description]
 */
export default function(options = {}, successCallback, failsCallback) {
  let uri

  if (isString(options)) {
    uri = options
    options = {}
  } else {
    uri = options.uri
  }

  options.headers = {
    'Accept': 'application/json'
    // 'Authorization': `Bearer ${token}`
  }

  fetch(getEndpoint(uri), options)
    .then(response => {
      if (response.status === 200) {
        response.json().then(successCallback)
        return
      }

      if (isFunction(failsCallback)) {
        response.json().then(failsCallback)
      }
    })
}
