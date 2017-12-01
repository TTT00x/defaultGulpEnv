const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const paths = require('../paths');

gulp.task('image', () => {
  const options = {optimizationLevel: 7};

  return gulp.src([`${paths.SRC}img/**`, `!${paths.SRC}img/sprite/`])
    .pipe(imagemin(options))
    .pipe(gulp.dest(`${paths.DEV}img`));
});
