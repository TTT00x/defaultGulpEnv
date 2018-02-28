const gulp = require('gulp');
const browserSync = require('browser-sync');
const paths = require('../paths');

gulp.task('server', () =>
  browserSync({
    notify: false,
    port: 3000,
    open: 'external',
    server: {
      baseDir: [paths.DEV],
    },
  }));

gulp.task('bsReload', () => browserSync.reload());
