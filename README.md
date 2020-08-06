# vue
### 1、安装项目本地专属的webpack 不用全局webpack

```powershell
npm install webpack@3.6.0 --save-dev
```
package.json 

```bash
{
  "name": "meet_webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"  
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {  //开发时依赖
    "webpack": "^3.6.0"
  }
}
```
通过 `npm run xxxx` 首先会去找本地对应的命令，没有找到，则会去全局环境变量中找
e.g `npm run build`  去package.json中的scripts里找build对应的命令，找到了，是webpcak，则会执行webpack
### 2.loader 打包除js之外的其他资源
1、通过npm安装loader
例如：打包css
```powershell
npm install --save-dev css-loader 
npm install --save-dev style-loader
```
webpack.config.json 中加入下面代码

```powershell
module: {
    rules: [
        //css-loader只负责加载css文件 style-loader负责将样式添加到DOM中
        //使用多个loader时从右向左读
      { test: /\.css$/, use: ['style-loader','css-loader']},
    ]
  }
```
加入后
```powershell
const path = require('path'); //绝对路径 依赖node包   npm init 生成 package.json
module.exports = {
  entry:'./src/main.js', //入口
  output:{
    path: path.resolve(__dirname,'dist'), //绝对路径  __dirname: node自带的全局变量 第二个参数为要拼接的路径
    filename:'bundle.js' //文件名
  },
  module: {
    rules: [
        //css-loader只负责加载css文件 style-loader负责将样式添加到DOM中
        //使用多个loader时从右向左读
      { test: /\.css$/, use: ['style-loader','css-loader']},
    ]
  }
}
```
### 3.处理less文件
### 4.处理图片
安装：

```powershell
npm install less-style --save -dev
```
webpack.config.js
```powershell
const path = require('path') //用npm init初始化得到path 依赖node包
module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname,'dist'), //__dirname: node 的全局变量
    filename:'bundle.js',
    publicPath:'dist/' //在url前面加上此路径 自动打包的图片才能找到
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },{
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },{
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 8196,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }]}}
```
### 5.配置vue

```powershell
npm install vue --save
```
- 版本  
    1. runtime-only  代码中不可以有template  
    2. runtime-compiler 代码中可以有template，因为有compiler可以编译template

runtime-only 编译template报错
解决: 配置 

```powershell
resolve:{
	alias:{
	'vue$':'vue/dist/vue.esm.js'  //指定使用的版本
	}
}
```
### plugin的使用
- 打包HTML的plugin
  - 安装
  
    ```npm install html-webpack-plugin --save-dev``` 
  - 配置 在webpack.config.js加上 
  
    ```
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    ....
     plugins:[
      new webpack.BannerPlugin('最终版权'),
      new HtmlWebpackPlugin()
      ]
      ```
  - 按模板生产dist下面的index.html
    
    ```
    new HtmlWebpackPlugin({
      template:'index.html'
    })
    ```
- 压缩js的plugin
  - 安装

    ```npm install uglifyjs-webpack-plugin@1.1.1 --save-dev```
### 搭建本地服务器
- npm install webpack-dev-server@2.9.1 --save-dev
- 配置 devServer

  webpack.config.js
  ```
  .....
  devServer:{
    contentBase:'./dist', 
    inline:true
  }
  ```
### webpack配置文件的分离
创建 prod.config.js  dev.config.js