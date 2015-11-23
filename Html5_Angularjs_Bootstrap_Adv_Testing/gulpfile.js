var gulp = require('gulp');
var browserSync = require('browser-sync');
var karma = require('karma').Server;
var connect = require('gulp-connect');

gulp.task('serve', ['server'],function() {
	browserSync.init({
		notify: false,
		port: 8080,
		server: {
			baseDir: ['app'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	});
	
	gulp.watch(['app/**/*.*'])
		.on('change', browserSync.reload);
	
});

//http://karma-runner.github.io/0.8/config/configuration-file.html
gulp.task('tdd', function(done) {
	// new karma({
	// 	configFile: __dirname + '/karma.conf.js',
	// 	singleRun: true,
	// 	reporters: ['mocha']
	// }, done).start(); 
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
        //reporter: ['mocha']
	});
});

gulp.task('serve-test', function() {
	browserSync.init({
		notify: false,
		port: 8081,
		server: {
			baseDir: ['src/client/test', 'src/client'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	});
	
	gulp.watch(['app/**/*.*'])
		.on('change', browserSync.reload);
	
});

/**
 * serve the dev environment
 */
gulp.task('serve-dev', function() {
    connect.server({
        root: ['src/client/test']
    });
});