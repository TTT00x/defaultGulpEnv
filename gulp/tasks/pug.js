const gulp = require('gulp');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const pug = require('gulp-pug');
const paths = require('../paths');

gulp.task('pug', () => {
  return gulp.src([
    `${paths.SRC}pug/**/*.pug`,
    `!${paths.SRC}pug/_*.pug`,
    `!${paths.SRC}pug/**/_*.pug`
  ])
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest(paths.DEV));
});

gulp.task('pugReload', (callback) => {
  return runSequence(
    'pug',
    'bsReload',
    callback
  );
});
