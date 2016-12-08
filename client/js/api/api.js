import 'whatwg-fetch'
import url from 'url'
import _ from 'lodash'

function getEndpoint(path) {
  return url.resolve(globals.apiRoot, path)
}

/**
 * Backend Api Request Wrapper
 * @param  {[type]} uri     [description]
 * @param  {Object} options [description]
 * @return {[type]}         [description]
 */
export default function(options = {}, successCallback, failsCallback) {
  let uri;

  if (_.isString(options)) {
    uri = options
    options = {}
  } else {
    uri = options.uri
  }

  options.headers = {
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${token}`
  }

  fetch(getEndpoint(uri), options)
    .then(response => {
      if (response.status === 200) {
        response.json().then(successCallback)
        return;
      }

      if (_.isFunction(failsCallback)) {
        response.json().then(failsCallback)
      }
    })

}
