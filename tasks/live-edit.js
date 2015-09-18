var gulp         = require('gulp');
var nodemon      = require('gulp-nodemon');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 3001,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', ['build', 'sass', 'browser-sync'], function () {
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch(["./src/**/*.js"], ['build', reload]);
    gulp.watch(["../index.html"], [reload]);
    
    gulp.watch(["./tests/**/*.js"], [reload]);
    gulp.watch(["./tests/index.html"], [reload]);
});