module.exports = function(config) {
	config.set({
		// browsers: ['PhantomJS'],
		// frameworks: ['mocha', 'chai'],
		files: [
			"bower_components/angular/angular.js",
            "bower_components/mocha/mocha.js",
			"bower_components/chai/chai.js",
			
			"src/client/test/*.js"
		]
	});
}