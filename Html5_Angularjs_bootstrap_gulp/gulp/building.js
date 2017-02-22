var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    vinylPaths = require('vinyl-paths'),
    stripDebug = require('gulp-strip-debug'),
    del = require('del'),
    templateCache = require('gulp-angular-templatecache');

var paths = gulp.paths;
var options = gulp.options;

var buildDependencies = [
  options['force-build'] ? 'linting' : 'linting-throw',
  'build-templateCache',
  //,
  //'build-templates',
  'build-assets'
];

//build templatesCache
var buildTemplates = function buildTemplates() {
  return gulp.src(paths.templates)
    .pipe($.if(options.minify, $.htmlmin({
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseInlineTagWhitespace: true
    })))
    .pipe(templateCache({module: 'templates.module', root: 'app'}));
};

gulp.task('build', buildDependencies, function () {
  gulp.src([paths.dist + '/**/*.js', '.tmp/**/*.js', '!' + paths.dist + '/**/vendor.js'])
    .pipe($.concat('app.js'))
    .pipe(gulp.dest(paths.dist + '/scripts'));

  return gulp.src(paths.dist + '/**/*')
    .pipe($.size({ showFiles: true }));
});


gulp.task('clean', function () {
  // pattern is windows-friendly according to https://github.com/mwaylabs/generator-m-ionic/issues/223#issuecomment-196060284
  return gulp.src(['dist/**/*.*'])
    .pipe(vinylPaths(del));
});


// concatenate files in build:blocks inside index.html
// and copy to build folder destinations
/*
運作方式:
1. useref會抓出全部vendorjs, appjs, vendorcss, appcss等區塊的檔案
2. 透過filter, 先過濾出全部的js檔
3. 作最小化
4. 透過restore, 還原成useref的stream
5. 透過filter, 過濾出全部的css檔
6. 作最佳化
7. 透過restore, 還原成useref的stream
8. 輸出stream到指定目錄
*/
gulp.task('build-app', ['clean', 'environment'], function () {
  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  var stream = gulp.src('src/client/*.html') // main html file
    .pipe($.useref({ searchPath: ['.', 'src/client']})); // all assets (without index.html)

  if (options.minify) {
    stream
      .pipe(jsFilter)
      .pipe($.ngAnnotate({
        add: true,
        sourcemap: true,
        single_quotes: true
      }))
      .pipe($.uglify({compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true
      }}))
      .pipe(jsFilter.restore)
      .pipe(cssFilter)
      .pipe($.csso())
      .pipe(cssFilter.restore)
  }

  stream.pipe(gulp.dest(paths.dist));

  return stream;
});

//copy templates
gulp.task('build-templates', ['clean'], function () {
  return gulp.src(paths.templates, { base: 'src/client/' })
    .pipe($.if(options.minify, $.htmlmin({
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseInlineTagWhitespace: true
    })))
    .pipe(gulp.dest('dist'));
});

//copy templateCache
gulp.task('build-templateCache', ['build-app'], function () {
  return gulp.src(paths.templates)
    .pipe($.if(options.minify, $.htmlmin({
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseInlineTagWhitespace: true
    })))
    .pipe(templateCache({module: 'templates.module', root: 'app'}))
    .pipe(gulp.dest('.tmp'));
});

// copy assets, wait for fonts
gulp.task('build-assets', ['clean', 'bower-fonts'], function () {

});
