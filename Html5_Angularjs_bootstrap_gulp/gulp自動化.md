gulp自動化
===

# 使用套件

!! 版本很重要, 一定要對

* [gulp](https://www.npmjs.com/package/gulp)
* [gulp-load-plugins: 簡化在gulp file中載入plugin的流程](https://www.npmjs.com/package/gulp-load-plugins)
* [gulp-filter: 過濾css或js, 或html文件](https://www.npmjs.com/package/gulp-filter)
* [gulp-useref: 利用在index.html中的commet加入特殊字串,找到要build的css或js檔](https://www.npmjs.com/package/gulp-useref)
* [vinyl-paths](https://www.npmjs.com/package/vinyl-paths)
* [gulp-strip-debug: ](https://www.npmjs.com/package/gulp-strip-debug)
* [del: ](https://www.npmjs.com/package/del)
* [minimist-parse argument options](https://www.npmjs.com/package/minimist)
* [requireDir-將gulp的task分散在多個檔案](https://www.npmjs.com/package/require-dir)
* [chalk-Terminal string styling done right. Much color.多樣化log的顏色](https://www.npmjs.com/package/chalk)
* [gulp-inject: 插入字串到來源檔案中](https://www.npmjs.com/package/gulp-inject)
* [ngAnnotate-angular執行最小化時,自動插入injection]()
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
* [gulp-csso: CSSO - (CSS Optimizer) is a CSS minifier with structural optimisations](https://www.npmjs.com/package/gulp-csso)
* [wiredep-在index.html加入特殊標記後,會自動將bower.json中的套件插入,全自動化-->目前沒用,因自動化較沒彈性](https://www.npmjs.com/package/wiredep)
* [gulp-plumber - Prevent pipe breaki](https://www.npmjs.com/package/gulp-plumber)
* [gulp-htmlmin: gulp plugin to minify HTML.](https://www.npmjs.com/package/gulp-htmlmin)
* [gulp-size : Display the size of your project](https://www.npmjs.com/package/gulp-size)
* [gulp-changed Only pass through changed files: 相同的檔案不用覆寫](https://www.npmjs.com/package/gulp-changed)
* [main-bower-files :Get main files from your installed bower packages.](https://www.npmjs.com/package/main-bower-files)
* [parse-filepath :parse路徑字串到object](https://www.npmjs.com/package/parse-filepath)
* [gulp-angular-templatecache Concatenates and registers AngularJS templates in the $templateCache.](https://www.npmjs.com/package/gulp-angular-templatecache)
* [gulp-concat :Concatenates files](https://www.npmjs.com/package/gulp-concat)
* [gulp-eslint: A gulp plugin for processing files with ESLint](https://www.npmjs.com/package/gulp-eslint)
* [gulp-jsonlint :A jsonlint plugin for Gulp](https://www.npmjs.com/package/gulp-jsonlint)

https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js

```
npm install --save-dev gulp-jsonlint
npm install gulp-eslint --save-dev
npm install --save-dev gulp-concat
npm install gulp-angular-templatecache --save-dev
npm install parse-filepath --save-dev
npm install --save-dev gulp-ng-annotate
npm install --save-dev main-bower-files
npm install --save-dev gulp-changed
npm install --save-dev gulp-size
npm install --save-dev gulp-if
npm i gulp-htmlmin --save-dev
npm install --save-dev gulp-useref
npm install --save-dev gulp-plumber
npm install --save-dev gulp-natural-sort
npm install --save-dev gulp-angular-filesort
npm install --save-dev wiredep
npm install gulp-csso --save-dev
npm install --save-dev gulp-uglify
npm install ng-annotate --save-dev
npm i --save-dev gulp-inject
npm install --save-dev gulp-filter
npm install --save require-dir
npm install minimist --save-dev
npm install --save-dev vinyl-paths
npm install --save-dev del
```

# 設計
參考`generate-m-ionic`的設計:

1. `/gulpfile.js`: 設定選項, 處理輸入參數, 設定路徑, 載入其它的task檔
2. injecting: 插入文字到特定檔案中
3. building: 建置輸出


### 


# 各套件使用

### gulp-useref
* [gulp-useref使用小結](https://love-yoyo.github.io/blog/2016/07/24/gulp-useref%E4%BD%BF%E7%94%A8%E5%B0%8F%E7%BB%93/)

如文章所說: `如果把文件一個一個的添加到gulpfile，這工作顯得太low了，於是我們可以利用gulp-useref插件進行自動化的工作。`. 使用的方式是將index.html載入後,
透過pipe到useref, 然後告訴它要到哪裡去找檔案.

```
  var stream = gulp.src('app/index.html') // main html file
    .pipe($.useref({ searchPath: '{.tmp,app}' })); // all assets (without index.html)
```


### minimist
第1個參數: 命令
後續的命令: 參數

```
gulp clean --cordova "run ios" --minify --force-build

{ _: [ 'clean' ],
  cordova: 'run ios',
  minify: true,
  'force-build': true }

gulp build --minify --env=prod
{ _: [ 'build' ], minify: true, env: 'prod' }

gulp --minify --force-build
{ _: [], minify: true, 'force-build': true }
會執行default task
```

### requireDir
[Spreading Gulp tasks into multiple files](https://medium.com/@_rywar/spreading-gulp-tasks-into-multiple-files-2f63d8c959d5#.vvah3i1xl)

我們可以將任務作切割管理在不同的js中:
.
├── gulp
│   ├── building.js
|   └── injecting.js
└── gulpfile.js


在載入
```
// load tasks
requireDir('./gulp');
```
---

# 其它技巧
參考generate-m-ionic的injecting.js, 如何將2個dev及prod的.json檔注入成config-const.json.

```
gulp.task('environment', function () {
  return gulp.src('app/*/constants/*const.js')
    .pipe(
      $.inject(
        gulp.src('app/main/constants/env-' + options.env + '.json'),
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
    .pipe(gulp.dest('app/'));
});
```

### !代表什麼
!(Exclamation)在file path前面代表`Ignore`.

```
Example (you want to exclude all *.min.js files on your js folder and subfolder:
gulp.src(['js/**/*.js', '!js/**/*.min.js'])
```