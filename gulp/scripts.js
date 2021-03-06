'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src([
      paths.src + '/{app,components,directives,services}/**/*.js',
      '!' + paths.src + '/{app,components,directives,services}/**/*.mock.js',
      '!' + paths.src + '/{app,components,directives,services}/**/*.spec.js'
    ])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($['6to5']())
    .on('error', handleError)
    .pipe(gulp.dest(paths.tmp + '/6to5'))
    .pipe($.size());
});

gulp.task('test-scripts', function () {
  return gulp.src([
      paths.src + '/{app,components,directives,services}/**/*.mock.js',
      paths.src + '/{app,components,directives,services}/**/*.spec.js'
    ])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($['6to5']())
    .on('error', handleError)
    .pipe(gulp.dest(paths.tmp + '/test-6to5'))
    .pipe($.size());
});

gulp.task('all-scripts', ['scripts', 'test-scripts'], function () {
  return gulp.src(paths.tmp + '/6to5/{app,components,directives,services}/**/*.js', { /*read: false*/ })
    .pipe(gulp.dest(paths.tmp + '/serve/app'))
    .pipe($.size());
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}
