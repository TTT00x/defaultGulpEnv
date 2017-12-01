import gulp from 'gulp';
import paths from '../paths';

gulp.task('watch', () => {
  gulp.watch([paths.SRC + 'pug/**.pug'], ['pug'])
  gulp.watch([paths.SRC + 'postcss/**.css'], ['postcss']);
});
