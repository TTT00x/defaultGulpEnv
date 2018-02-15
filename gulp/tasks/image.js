const gulp = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const paths = require('../paths');

gulp.task('delImage', () => del([`${paths.DEV}img/**`, `!${paths.DEV}img/sprite/**`]));

gulp.task('image', ['delImage'], () => {
  const options = { optimizationLevel: 7 };

  return gulp.src([
    `${paths.SRC}img/*.+(jpg|jpeg|png|gif|svg)`,
    `${paths.SRC}img/**/*.+(jpg|jpeg|png|gif|svg)`,
    `!${paths.SRC}img/sprite/**`,
  ])
    .pipe(imagemin(options))
    .pipe(gulp.dest(`${paths.DEV}img`));
});
