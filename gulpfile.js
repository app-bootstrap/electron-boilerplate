'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var babelify = require('babelify');
var stringify = require('stringify');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
  return browserify({
    debug: true,
    ignore: [],
    bundleExternal: false
  })
  .transform(stringify(['.html']))
  .transform(babelify.configure({
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }))
  .add('./lib/assets/index.js')
  .bundle()
  .pipe(source('./index.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./lib/dist'));
});

gulp.task('less', function() {
  return gulp
    .src('./lib/assets/index.less')
    .pipe(less())
    .pipe(gulp.dest('./lib/dist'));
});

gulp.task('watch', ['js', 'less'], function() {
  gulp.watch(['lib/assets/*.js', 'lib/assets/**/*.js'], ['js']);
  gulp.watch(['lib/assets/*.less', 'lib/assets/**/*.less'], ['less']);
});

gulp.task('default', ['js', 'less']);
