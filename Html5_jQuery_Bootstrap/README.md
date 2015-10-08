HTML5開發範本
===
用途為開發一般的HTML5網站使用. 包含的套件如下:
環境套件
* nodejs
* bower
* gulp

函式庫
* jQuery
* Bootstrap3
* font-awesome

## 使用方式
首先安裝所需的函式庫及本地伺服器環境. 我使用的是nodejs, gulp和bower.

#### 安裝nodejs
這裡使用的OS是windows環境. 到[Nodejs官網](https://nodejs.org/en/)下載windowsX64的msi檔後並執行安裝.

安裝完成後, 需要新增package.json設定要用npm安裝的套件. 這裡使用已建立好的package.json即可.

#### 安裝bower
在安裝好nodejs後, 就可以安裝bower了. 我們裝bower裝在global的環境.

``` npm install -g bower```

接下來可以開始初始化環境:
```
npm install
bower install
```
若是都順利的下載套件到本地端, 就可以啟動本地的伺服器了.
```
gulp serve-dev
```
輸出訊息如下:
>name@host-123 /html5-boilerplate
$ gulp serve-dev
[11:06:39] Using gulpfile D:\html5-boilerplate\gulpfile.js<br/>
[11:06:39] Starting 'serve-dev'...<br/>
[11:06:39] Finished 'serve-dev' after 27 ms<br/>
[11:06:39] Server started http://localhost:8080<br/>
[11:06:39] LiveReload started on port 35729<br/>

打開Browser後, 輸入localhost:8080即可看到畫面.

---
## 安裝其它函式庫
使用bower安裝新的函式庫到開發環境:
```
bower install jquery --save-dev
```
完成後會將它安裝至<bower_components>中, 並且會新增設定到**bower.json**中.
