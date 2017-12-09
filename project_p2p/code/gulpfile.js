// 引入gulp
var gulp = require('gulp');
// 引入编译less的插件
var less = require('gulp-less');
//引入压缩css的插件
var cleanCss = require('gulp-clean-css');
//引入压缩js的插件
var uglify = require('gulp-uglify');
//引入压缩图片的插件
var imagemin = require('gulp-imagemin');
//引入重命名插件
var rename = require('gulp-rename');
//引入热更新插件
var livereload = require('gulp-livereload');

//编译less
gulp.task('less', function () {
   gulp
       .src("styles/less/core.less")
       .pipe(less())
       .pipe(gulp.dest("styles/css"))
       .pipe(livereload())
});

//压缩css
gulp.task('cleanCss', function () {
    gulp
        .src("styles/css/core.css")
        .pipe(cleanCss())
        .pipe(rename({
            suffix : ".min"
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(livereload())
});

//压缩js
gulp.task('uglify', function () {
    gulp
        .src("js/*.js")
        .pipe(uglify())
        .pipe(rename({
            suffix : ".min"
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(livereload())
});

//压缩图片
gulp.task('imagemin', function () {
    gulp
        .src("images/**")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"))
});

//观察者
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('styles/less/*.less',['less']);
    gulp.watch('styles/css/*.css',['cleanCss']);
    gulp.watch('js/*.js',['uglify']);
});



