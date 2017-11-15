const gulp = require('gulp');
const gutil = require('gulp-util');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');

gulp.task('server', () => {
  let myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';

  new WebpackDevServer(webpack(myConfig), {
    publicPath: `/${myConfig.devServer.contentBase}`,
    stats: {
      colors: true
    },
    contentBase:`${myConfig.devServer.contentBase}`
  }).listen(myConfig.devServer.port, 'localhost', function(err) {
    if(err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', `http://localhost:${myConfig.devServer.port}/webpack-dev-server/index.html`);
  });
});