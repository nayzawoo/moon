var path = require('path')
var webpack = require('webpack')
var PROD = JSON.parse(process.env.PROD_ENV || '0')

var entryProd = {
  'js/bundle.min.js' : ['./client/index']
}
var plugins = []

if (PROD) {
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ])
}

module.exports = {
  devtool: PROD ? '' : 'eval',
  entry: PROD ? entryProd : {
    'js/bundle.js' : ['./client/index']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name]',
    publicPath: './public/'
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js|\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}
