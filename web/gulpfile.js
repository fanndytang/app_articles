/**
 * Created by fanhh on 2017/4/24.
 */
let gulp = require('gulp'),
    fs = require('fs'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    SSI = require('browsersync-ssi'),
    clean = require('gulp-clean'),
    scriptsPath = 'themes/next/source/demo/js',
    cssPath = 'themes/next/source/demo/css';

//  获取文件夹名称
function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

//  demo---js    uglify && concat
gulp.task('scripts', function() {
    let folders = getFolders(scriptsPath),
        tasks = folders.map(function(folder) {
            // 拼接成 foldername.js  压缩   重命名为 folder.min.js (去除首个_)   写入输出
            return gulp.src(path.join(scriptsPath, folder, '/*.js'))
                .pipe(concat(folder.replace('_', '') + '.js'))
                .pipe(uglify())
                .pipe(rename(folder.replace('_', '') + '.min.js'))
                .pipe(gulp.dest(scriptsPath));
        });
    return merge(tasks);
});

//  demo---css    minify && concat
gulp.task('less', function() {
    let folders = getFolders(cssPath),
        tasks = folders.map(function(folder) {
            // 编译less  拼接成 foldername.css  压缩   重命名为 folder.min.css (去除首个_)   写入输出
            return gulp.src(path.join(cssPath, folder, '/*.less'))
                .pipe(less())
                .pipe(concat(folder.replace('_', '') + '.css'))
                .pipe(minify())
                .pipe(rename(folder.replace('_', '') + '.min.css'))
                .pipe(gulp.dest(cssPath));
        });
    return merge(tasks);
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
    gulp.watch("themes/next/source/demo/js/**/*.js", ['scripts']);
    gulp.watch("themes/next/source/demo/css/**/*.less", ['less']);
});

gulp.task('default', ['server'], function() {
});
