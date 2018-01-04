const gulp = require('gulp');
const browserSync = require('browser-sync');
const paths = require('../paths');

gulp.task('server', () => {
  return browserSync({
    notify: false,
    port: 3000,
    server: {
      baseDir: [paths.DEV]
    }
  });
});

gulp.task('bsReload', () => {
  return browserSync.reload();
});