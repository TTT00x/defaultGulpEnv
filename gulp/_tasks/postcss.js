const gulp = require('gulp');
const runSequence = require('run-sequence');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const customProperties = require('postcss-custom-properties');
const paths = require('../paths');

gulp.task('postcss', () => {
  const plugins = [
    cssImport,
    customProperties,
    nested,
    autoprefixer,
  ];
  return gulp.src(`${paths.SRC}postcss/style.css`)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(`${paths.DEV}css`));
});

gulp.task('postcssReload', callback => runSequence('postcss', 'bsReload', callback));
