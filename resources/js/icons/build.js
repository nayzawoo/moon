/**
 * npm run build-icons
 * @type {[type]}
 */
var octicons = require('octicons')
var fs = require('fs')

var icons = {
  database: octicons.database.toSVG(),
  folder: octicons['file-directory'].toSVG(),
  plusSmall: octicons['plus-small'].toSVG(),
  dash: octicons.dash.toSVG(),
  sync: octicons.sync.toSVG()
}

var buildIconData = 'module.exports = '
buildIconData += JSON.stringify(icons, null, 2)

fs.writeFile(__dirname + '/index.js', buildIconData, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
