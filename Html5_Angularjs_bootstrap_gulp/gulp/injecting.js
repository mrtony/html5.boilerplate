var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

var options = gulp.options;
var paths = gulp.paths;

/**
 * transforms object into a string format that is ready for injection at indentation 4
 * @param  {Object} obj Object with values to inject
 * @return {String}     properly formatted string
 */
var injectFormat = function (obj) {
  // indentation of 2
  obj = JSON.stringify(obj, null, 2);
  // replace all doublequotes with singlequotes
  obj = obj.replace(/\"/g, '\'');
  // remove first and last line curly braces
  obj = obj.replace(/^\{\n/, '').replace(/\n\}$/, '');
  // remove indentation of first line
  obj = obj.replace(/^( ){2}/, '');
  // insert padding for all remaining lines
  obj = obj.replace(/\n( ){2}/g, '\n    ');

  return obj;
};

gulp.task('environment', function () {
  return gulp.src('src/client/*/constants/*const.js')
    .pipe(
      $.inject(
        gulp.src('src/client/app/constants/env-' + options.env + '.json'),
        {
          starttag: '/*inject-env*/',
          endtag: '/*endinject*/',
          transform: function (filePath, file) {
            var json;
            try {
              json = JSON.parse(file.contents.toString('utf8'));
            }
            catch (e) {
              console.log(e);
            }

            if (json) {
              json = injectFormat(json);
            }
            return json;
          }
        }))
    .pipe(gulp.dest('src/client/'));
});

// copy bower fonts
gulp.task('bower-fonts', ['clean'], function () {
  console.log('***************');
   var DEST = paths.dist + '/fonts';

  return gulp.src('./bower_components/font-awesome/fonts/**/*.*')
    .pipe($.changed(DEST))
    .pipe(gulp.dest(DEST));
});