const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');
const pleeease = require('gulp-pleeease');
const csscomb = require('gulp-csscomb');
const paths = require('../paths');

gulp.task('sass', () =>
  gulp.src(`${paths.SRC}/scss/style.scss`)
    .pipe(plumber())
    .pipe(sass()).on('error', console.error.bind(console))
    .pipe(pleeease({
      minifier: false,
      autoprefixer: {
        browsers: ['last 4 versions'],
      },
    }))
    .pipe(csscomb())
    .pipe(gulp.dest(`${paths.DEV}/css`)));

gulp.task('sassReload', callback => runSequence('sass', 'bsReload', callback));
