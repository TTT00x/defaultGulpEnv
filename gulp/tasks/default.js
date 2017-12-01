const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (callback) => {
  runSequence(
    'pug',
    'postcss',
    'javascript',
    'image',
    'watch',
    'server',
    callback
  );
});
