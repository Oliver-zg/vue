const path = require('path') //用npm init初始化得到path 依赖node包
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname,'../dist'), //__dirname: node 的全局变量
    filename:'bundle.js',
    //publicPath:'dist/', //在url前面加上此路径
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
      },{
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
      }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权'),
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ]

}