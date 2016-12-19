/**
 * highlightjs
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export default function(value) {
  return hljs.highlight('javascript', value)
}
