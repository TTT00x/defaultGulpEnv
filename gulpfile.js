var gulp = require('gulp');
var plumber = require('gulp-plumber');
var del = require('del');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var cssmin = require('gulp-cssmin');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var eslint = require('gulp-eslint');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var paths= {
  SRC: './src/',
  DIST: './dist/',
};

function compilePug(done) {
  gulp.src([
    `${paths.SRC}pug/**/*.pug`,
    `!${paths.SRC}pug/_*.pug`,
    `!${paths.SRC}pug/**/_*.pug`,
  ])
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest(paths.DIST));
  done();
};
exports.compilePug = compilePug;

function compileSass(done) {
  gulp.src(`${paths.SRC}/scss/style.scss`)
    .pipe(plumber())
    .pipe(sass()).on('error', console.error.bind(console))
    .pipe(pleeease({
    minifier: false,
    autoprefixer: {
        browsers: ['last 4 versions'],
    },
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(`${paths.DIST}/css`));
  done();
};
exports.compileSass = compileSass;

function compileJs(done) {
  webpackStream(webpackConfig, webpack).pipe(gulp.dest(`${paths.DIST}js`))
  done();
};
exports.compileJs = compileJs;

function esLint(done) {
  gulp.src([`${paths.SRC}js/**.js`])
    .pipe(eslint())
    .pipe(eslint.format())
  done();
};
exports.esLint = esLint;

function delImage(done) {
  del([`${paths.DIST}img/**`, `!${paths.DIST}img/sprite/**`]);
  done();
};
exports.delImage = delImage;

function minifyImage(done) {
  var options = { optimizationLevel: 7 };

  gulp.src([
    `${paths.SRC}img/**/*.+(jpg|jpeg|png|gif|svg)`,
    `!${paths.SRC}img/sprite/**`,
  ])
    .pipe(imagemin(options))
    .pipe(gulp.dest(`${paths.DIST}img`));
  done();
};
exports.minifyImage = minifyImage;

function server(done){
  browserSync({
    port: 3000,
    open: 'external',
    server: {
      baseDir: [paths.DIST],
    },
    notify: false,
    ghostMode: false,
  });
  done();
};
exports.server = server;

function reloadBrower(done) {
  browserSync.reload();
  done();
};
exports.reloadBrower = reloadBrower;

function watch() {
  gulp.watch([`${paths.SRC}pug/**/*.pug`], gulp.series(compilePug, reloadBrower));
  gulp.watch([`${paths.SRC}scss/**/*.scss`], gulp.series(compileSass, reloadBrower));
  gulp.watch([`${paths.SRC}js/**/*.js`], gulp.parallel(gulp.series(compileJs, reloadBrower), esLint));
};
exports.watch = watch;

gulp.task('compile', gulp.series(compilePug, compileSass, compileJs));
gulp.task('image', gulp.series(delImage, minifyImage));
gulp.task('default', gulp.series('compile', server, watch));
