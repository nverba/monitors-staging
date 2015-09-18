var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var source     = require('vinyl-source-stream');
var babelify   = require('babelify');
var streamify  = require('gulp-streamify');
var browserify = require('browserify');
var argv       = require('yargs').alias('test', 'development').argv;
var gulpif     = require('gulp-if');

gulp.task('build', function() {

  return browserify({ debug: argv.development })
    .transform(babelify)
    .require("./src/js/index.js", { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(gulpif(!argv.development, source('bundle.min.js'), source('bundle.js')))
    .pipe(gulpif(!argv.development, streamify(uglify())))
    .pipe(gulp.dest('./dist/js'));

});