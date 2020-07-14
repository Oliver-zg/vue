//commonjs模块化规范
const {add,mul} = require('./js/mathUtils.js')

console.log(add(1, 2));
console.log(mul(2, 3));
//ES6模块化规范
import {name,age,height} from './js/info';
console.log(name+','+age+','+height);

//打包 webpack ./src/main.js ./dist/bundle.js

//依赖css文件
require('./css/normal.css')

//依赖less文件
require('./css/special.less')

import Vue from 'vue'

const app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Webpack'
  }
})
