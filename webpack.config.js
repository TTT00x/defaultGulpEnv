module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { modules: false }],
          ],
        },
      }],
    }],
  },
  devtool: 'source-map',
};
