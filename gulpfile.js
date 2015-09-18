var gulp       = require('gulp');
var requireDir = require('require-dir')('./tasks');
var argv       = require('yargs').argv;

// use --flag style options to set NODE_ENV environment variable. 
// if (argv.development) {
// 	process.env.NODE_ENV = 'development';
// } else {
// 	process.env.NODE_ENV = 'production';
// }