const gulp = require('gulp');
const paths = require('../paths');

gulp.task('watch', () => {
  gulp.watch([paths.SRC + 'pug/**.pug'], ['pug'])
  gulp.watch([paths.SRC + 'postcss/**.css'], ['postcss']);
});
