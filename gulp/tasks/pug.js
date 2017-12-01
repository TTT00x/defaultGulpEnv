const gulp = require('gulp');
const plumber = require('gulp-plumber');

const pug = require('gulp-pug');
const htmlhint = require('gulp-htmlhint');

const paths = require('../paths');

gulp.task('pug', () => {
  return gulp.src([
    paths.SRC + '/pug/**/*.pug',
    '!' + paths.SRC + '/pug/_**/_*.pug'
  ])
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest(paths.DEV))
})
