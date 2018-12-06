const path = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const dev = 1|| process.argv.pop() === '--dev' ? true : false
const mode = dev ? 'development' : 'production'

module.exports = {
  mode: mode,
  watch: dev ? false : true,
  devtool: dev ? 'source-map' : 'none',
  entry: {
    main: './demo/test.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'test' + (dev ? '.dev' : '') + '.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  optimization: {
    nodeEnv: mode,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          },
          mangle: {
            safari10: true
          }
        },
        test: /\.js($|\?)/i,
        exclude: /node_modules/,
        sourceMap: false,
        parallel: true
      })
    ]
  },
  performance: {
    hints: false
  },
  devServer:{
    contentBase:'./',
    hot: true
  },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 500,
    ignored: '/node_moduels/'
  }
}