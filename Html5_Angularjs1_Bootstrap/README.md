HTML5 Angularjs 1.x 開發範本
===
用途為開發一般的HTML5+Angularjs網站使用. 包含的套件如下:
環境套件
* nodejs
* bower
* gulp

函式庫
* Angularjs
* Angular ui-router
* Bootstrap3
* font-awesome
* lodash
* moment
* numeral
* toastr
* ui-bootstrap

## 使用方式
首先安裝所需的函式庫及本地伺服器環境. 我使用的是nodejs, gulp和bower.

#### 安裝nodejs
這裡使用的OS是windows環境. 到[Nodejs官網](https://nodejs.org/en/)下載windowsX64的msi檔後並執行安裝.

安裝完成後, 需要新增package.json設定要用npm安裝的套件. 這裡使用已建立好的package.json即可.

#### 安裝bower
在安裝好nodejs後, 就可以安裝bower了. 我們裝bower裝在global的環境. (若已安裝過可忽略此步驟)

``` npm install -g bower```

接下來可以開始初始化環境:
```
npm install
bower install
tsd install
```
若是都順利的下載套件到本地端, 就可以啟動本地的伺服器了.
```
gulp serve-dev
```
輸出訊息如下:
>name@host-123 /html5-boilerplate
$ gulp serve-dev
[11:06:39] Using gulpfile D:\html5-angularjs1-boilerplate\gulpfile.js<br/>
[11:06:39] Starting 'serve-dev'...<br/>
[11:06:39] Finished 'serve-dev' after 27 ms<br/>
[11:06:39] Server started http://localhost:8080<br/>
[11:06:39] LiveReload started on port 35729<br/>

打開Browser後, 輸入localhost:8080即可看到畫面.

### 其它支援的gulp task
* `gulp serve-dev-livereload` : 支援livereload. 只要變更html, css, js檔, 就會重載頁面.
* `browser-sync` : 支援多瀏覽器同步, 也支援livereload.

---
## 安裝其它函式庫的方式
以下以安裝jQuery為範例, 使用bower安裝新jQuery函式庫到開發環境:
```
bower install jquery --save-dev
```
完成後會將它安裝至<bower_components>中, 並且會新增設定到**bower.json**中.

---
## 使用Visual Studio Code IDE的Intellisense
VS Code使用type script參考檔來作Intellisense. 我們使用`TSD`模組來安裝管理. 

### 安裝TSD
```
npm install tsd -g
```

### 使用的TS及安裝方式
舉例來說, 要安裝angularjs模組時, 輸入`tsd install angularjs/ --resolve --save`, 就會建立`typings`的子目錄及`tsd.json`檔. `tsd.json`就像是bower.josn一樣可以用來管理ts套件, 日後只要從github clone專案下來, 
再用`tsd install`就可以重新復原所有的ts模組.

在此範本中會安裝的範本如下:
* AngularJS: tsd install angularjs/ --resolve --save
* ui-router: tsd install angular-ui-router/ --resolve --save
* ui-router: tsd install angular-ui-bootstrap/ --resolve --save
* lodash: tsd install lodash/ --resolve --save
* moment: tsd install moment/ --resolve --save
* numeral: tsd install numeraljs/ --resolve --save

### 相關資源
* [教你使用TSD安裝TS及Intellisense - 如何用 Visual Studio Code 開發 AngularJS 應用程式](http://blog.miniasp.com/post/2015/06/08/Using-Visual-Studio-Code-with-AngularJS.aspx)
* [所有支援的TS的Github - borisyankov/DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped)
* [TSD官網](http://definitelytyped.org/tsd/)