const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const paths = require('../paths');

gulp.task('js', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest(`${paths.DEV}js`));
});