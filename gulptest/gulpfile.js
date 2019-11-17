// 引入插件
var gulp = require('gulp');
var concat = require('gulp-concat');
var press = require('gulp-uglify');
//创建一个任务
gulp.task("first", function () {
    console.log('哈哈哈，这是我的第一个gulp任务！');
    console.log('Hello The Fuck World!');
});
// 在 gulp 中有一个默认的任务 default

gulp.task('default', function () {
    console.log('默认的任务');
});
// 合并JS
gulp.task('concat', function () {
    // 引入源文件
    gulp.src([
        './self/Itcast.core.js',
        './self/Itcast.ctor.js',
        './self/Itcast.dom.js',
        './self/Itcast.event.js',
        './self/Itcast.style.js',
        './self/Itcast.attr.js'
    ])
    // 设置管道执行任务
    // 设置目标文件名称
    .pipe(concat('Itcast.js'))
    // 设置目标文件位置
    .pipe(gulp.dest('./dist'));
})
