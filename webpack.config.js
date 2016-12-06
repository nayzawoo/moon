var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var PROD = JSON.parse(process.env.PROD_ENV || '0')

var entryProd = {
  'css/style.min.css': './client/scss/main',
  'js/bundle.min.js': ['./client/js/main']
}

var extractCSS = new ExtractTextPlugin('[name]', {
  allChunks: true
})

var sassLoaders = [
  'css-loader?importLoaders=1',
  'postcss-loader?sourceMap=inline',
  'sass-loader?sourceMap=inline'
]

if (PROD) {
  sassLoaders = [
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ]
}

var plugins = [
  extractCSS
]

if (PROD) {
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
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
    'css/style.css': './client/scss/main',
    'js/bundle.js': ['./client/js/main']
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
      include: path.join(__dirname, 'client/js')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', sassLoaders)
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }]
  },
  postcss: function() {
    var option = [require('autoprefixer')]
    if (PROD) {
      option.push(require('cssnano'))
    }
    return option
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'client/scss'), 'node_modules']
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: ['', '.js', '.vue', '.scss']
  }
}
