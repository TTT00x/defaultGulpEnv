const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',
  output: {
    publicPath: 'dev',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  devServer: {
    contentBase: 'dev',
    port: 8081
  },
}