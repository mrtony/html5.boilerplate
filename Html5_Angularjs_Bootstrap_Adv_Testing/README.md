HTML5 Angularjs 1.x 開發範本進階版含測試
===

# 安裝
```
npm install karma karma-mocha karma-phantomjs-launcher -g
bower install --save-dev mocha chai
npm install --save-dev karma mocha
npm install --save-dev karma-mocha
npm install --save-dev karma-phantomjs-launcher
bower install --save-dev angular-mocks
```

# 建立簡單測試
在`test`目錄中, 建立`index.htm`(測試畫面)及`main.spec.js`.

index.html
```
<head>
	<title>Mocha Spec Runner</title>
	<link rel="stylesheet" href="bower_components/mocha/mocha.css"></link>		
</head>

<body>
	<div id="mocha"></div>
	<h1>Hello World!</h1>
	<script src="bower_components/angular/angular.js"></script>	
	<script src="bower_components/mocha/mocha.js"></script>
	<script src="bower_components/chai/chai.js"></script>
	
	<script>
		mocha.setup('bdd');
	</script>	
	<script src="bower_components/angular-mocks/angular-mocks.js"></script>
	
	<script src="main.spec.js"></script>
	<script>
		mocha.run();
	</script>
</body>
```

main.spec.js
```
var assert = chai.assert;
//var expect = chai.expect;

describe("The Address Book App", function() {
	describe("the contact service", function() {

		var arr = [];
		it("should have a property contacts, an array", function() {
			chai.expect(arr).to.be.an('array');	
		});
		
	})
});
```


# 設定測試local server
在``gulpfile.js使`中設定browserSync套件, 並將工作目錄指向test目錄. 執行`serve-test`後,即可看到測試結果.
```
gulp.task('serve-test', function() {
	browserSync.init({
		notify: false,
		port: 8081,
		server: {
			baseDir: [paths.test, './'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	});
	
	gulp.watch(['app/**/*.*'])
		.on('change', browserSync.reload);
	
});
```

# 測試promise
安裝`chai as promise`:
```
bower install chai-as-promised --save-dev
```

載入並執行(index.html), [範例](http://jsfiddle.net/scottned/yG3PL/)
```
<script src="bower_components/chai-as-promised/lib/chai-as-promised.js"></script>
<script>
    mocha.setup('bdd');
    chai.should();
</script>	

```