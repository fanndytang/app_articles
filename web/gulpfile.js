/**
 * Created by fanhh on 2017/4/24.
 */
let gulp = require('gulp'),
 //   fs = require('fs'),
  //  path = require('path'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    minify = require('gulp-minify-css'),
//    concat = require('gulp-concat'),
 //   merge = require('merge-stream'),
 //   rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    scriptsPath = '../server/www/static/admin/js',
    cssPath = '../server/www/static/admin/css';

//  demo---js    uglify
gulp.task('scripts', function() {
   return gulp.src(scriptsPath + '/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(scriptsPath));
});

//  demo---css    minify
gulp.task('less', function() {
    return gulp.src(cssPath + '/*.less')
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest(cssPath));
});

//  bootstrap
gulp.task('bootstrap-less', function() {
    return gulp.src('node_modules/bootstrap/less/bootstrap.less')
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest('../server/www/static/admin/plugin/bootstrap/css'));
});

//  清除所以编译生成的js（demo）
gulp.task('clean-scripts', function() {
    return gulp.src(scriptsPath+'/*.min.js')
        .pipe(clean());
});
//  清除所以编译生成的css（demo）
gulp.task('clean-css', function() {
    return gulp.src(cssPath+'/*.min.css')
        .pipe(clean());
});

gulp.task('server', function() {
    gulp.watch(scriptsPath+"/**/*.js", ['scripts']);
    gulp.watch(cssPath+"/**/*.less", ['less']);
});

gulp.task('default', ['server'], function() {
});
