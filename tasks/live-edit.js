var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 8080,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', ['build', 'sass', 'browser-sync'], function () {
    gulp.watch('./src/**/**/*.scss', ['sass']);
    gulp.watch(["./src/**/**/*.js"], ['build', reload]);
    gulp.watch(["./index.html"], [reload]);
    
    // gulp.watch(["./tests/**/*.js"], [reload]);
    // gulp.watch(["./tests/index.html"], [reload]);
});