const gulp = require('gulp');
const runSequence = require('run-sequence');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const del = require('del');
const paths = require('../paths');

gulp.task('copyHtml', () =>
  gulp.src([`${paths.DEV}*.html`, `${paths.DEV}**/*.html`])
    .pipe(gulp.dest(paths.DIST)));

gulp.task('minCss', () =>
  gulp.src(`${paths.DEV}css/style.css`)
    .pipe(concat('style.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(`${paths.DIST}css`)));

gulp.task('copyJs', () =>
  gulp.src(`${paths.DEV}js/**`)
    .pipe(gulp.dest(`${paths.DIST}js`)));

gulp.task('delDistImage', () => del([`${paths.DIST}img/**`]));

gulp.task('copyDevImage', ['delDistImage'], () =>
  gulp.src(`${paths.DEV}img/**`)
    .pipe(gulp.dest(`${paths.DIST}img`)));

gulp.task('build', callback => runSequence('copyHtml', 'minCss', 'copyJs', 'copyDevImage', callback));
