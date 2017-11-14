const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.js"
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  devServer: {
    contentBase: 'dist',
    port: 8081
  },
}