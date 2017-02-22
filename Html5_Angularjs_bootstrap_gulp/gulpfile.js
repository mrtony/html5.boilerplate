var gulp = require('gulp'),
    connect = require('gulp-connect'),
    plug = require('gulp-load-plugins')();
var liveServer = require("live-server");
var minimist = require('minimist');
var requireDir = require('require-dir');
var pathParse = require('parse-filepath');


// config
var paths = gulp.paths = {
  bowerComponents: 'bower_components',
  dist: 'dist',
  jsFiles: ['src/client/**/*.js', '!bower_components/**/*.js'],
  jsonFiles: ['src/client/**/*.json', '!bower_components/**/*.json', , '!node_modules/**/*.json'],
  //scssFiles: ['app/*/styles/**/*.scss'],
  cssFiles: ['src/client/*/styles/*.css'],
  templates: ['src/client/app/**/*.html']
  //contrib: ['gulpfile.js', 'gulp/**/*.js', 'hooks/**/*.js'],
};
paths.watchFiles = paths.jsFiles
  .concat([
    'app/index.html',
    'app/*/assets/**/*'
  ])
  .concat(paths.templates);

// OPTIONS
var options = gulp.options = minimist(process.argv.slice(2));
options.env = options.env || 'dev';

// load tasks
requireDir('./gulp');

gulp.task('default', ['serve-dev']);

gulp.task('path', function() {
    paths.templates.forEach(function(value, i) {
        console.log(pathParse(value).dirname.replace(/\*/g, ''));
    });
});


/**
 * serve the dev environment
 */
gulp.task('serve-dev', ['linting'], function() {
    connect.server({
        root: ['./src/client', './'],
        livereload: true
    });
});

/**
 * serve the dist environment
 */
gulp.task('serve', function() {
    connect.server({
        root: ['./dist', './'],
        livereload: true
    });
});