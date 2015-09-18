var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var source     = require('vinyl-source-stream');
var babelify   = require('babelify');
var watchify   = require('watchify');
var streamify  = require('gulp-streamify');
var browserify = require('browserify');
var argv       = require('yargs').alias('test', 'development').argv;
var gulpif     = require('gulp-if');
var preprocess = require('gulp-preprocess');
  
// Use browserify to build dist/mis-button.js from src/mis-button.js

gulp.task('build', function() {
  
  var bundleStream = browserify({ entries: 'src/js/monitors.js', debug: argv.development, transform: babelify.configure({
    optional: ["utility.inlineEnvironmentVariables"]
  })});
  var watchBundle  = argv.development ? watchify(bundleStream) : bundleStream; 
  
  function bundle() {
    return watchBundle
      .bundle()
      .on('error', function(err){
        console.log(err.message);
      })
      .pipe(gulpif(!argv.development, source('monitors.min.js'), source('monitors.js')))
      .pipe(streamify(preprocess({ context: { development: argv.development }})))
      .pipe(gulpif(!argv.development, streamify(uglify())))
      .pipe(gulp.dest('./dist/js'));
  }
  
  // When passing the development flag, this watches the .js source for changes, and rebuilds the application when saved.
  
  if (argv.development) {
    watchBundle.on('update', bundle);
    watchBundle.on('log', function(msg) {
      console.log(msg);
    });
  }
  
  return bundle();
});