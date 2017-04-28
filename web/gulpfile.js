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
    assets_scriptsPath = '../server/www/static/assets/js',
    assets_cssPath = '../server/www/static/assets/css',
    scriptsPath = '../server/www/static/admin/js',
    cssPath = '../server/www/static/admin/css';

//  demo---js    uglify
gulp.task('admin-scripts', function() {
   return gulp.src(scriptsPath + '/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(scriptsPath));
});

gulp.task('assets-scripts', function() {
    return gulp.src(assets_scriptsPath + '/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(assets_scriptsPath));
});

//  demo---css    minify
gulp.task('admin-less', function() {
    return gulp.src(cssPath + '/*.less')
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest(cssPath));
});

gulp.task('assets-less', function() {
    return gulp.src(assets_cssPath + '/*.less')
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest(assets_cssPath));
});

//  bootstrap
gulp.task('bootstrap-less', function() {
    return gulp.src('cache/bootstrap/less/bootstrap.less')
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
    gulp.watch(scriptsPath+"/*.js", ['admin-scripts']);
    gulp.watch(cssPath+"/*.less", ['admin-less']);
    gulp.watch(assets_scriptsPath+"/*.less", ['assets-scripts']);
    gulp.watch(assets_cssPath+"/*.less", ['assets-less']);
    gulp.watch("cache/bootstrap/less/bootstrap.less", ['bootstrap-less']);
});

gulp.task('default', ['server'], function() {
});
