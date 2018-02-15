const gulp = require('gulp');
const paths = require('../paths');

gulp.task('watch', () => {
  gulp.watch([`${paths.SRC}pug/*.pug`, `${paths.SRC}pug/**/*.pug`], ['pugReload']);
  gulp.watch([`${paths.SRC}scss/*.scss`, `${paths.SRC}scss/**/*.scss`], ['sassReload']);
  // gulp.watch([`${paths.SRC}postcss/*.css`, `${paths.SRC}postcss/**/*.css`], ['postcssReload']);
  gulp.watch([`${paths.SRC}js/*.js`, `${paths.SRC}js/**/*.js`], ['jsReload']);
  gulp.watch([`${paths.SRC}js/*.js`, `${paths.SRC}js/**/*.js`], ['lint']);
});
