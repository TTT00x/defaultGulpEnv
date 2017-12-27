const gulp = require('gulp');
const runSequence = require('run-sequence');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const cssimport = require('postcss-import');
const simplevars = require('postcss-simple-vars');
const paths = require('../paths');

gulp.task('postcss', () => {
  const plugins = [
    cssimport,
    simplevars,
    nested,
    autoprefixer,
  ];
  return gulp.src(`${paths.SRC}postcss/style.css`)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(`${paths.DEV}css`))
});

gulp.task('pugReload', (callback) => {
  runSequence(
    'postcss',
    'bsReload',
    callback
  );
});