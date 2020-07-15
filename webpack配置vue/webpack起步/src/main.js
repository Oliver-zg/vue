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
//import App from './vue/app'
import App from './vue/App.vue'

new Vue ({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }

})
/* new Vue({
  el: '#app',
  template:`
  <h2>{{message}}</h2>
 `,
  data:{
    message: 'Hello Webpack'
  }
}) */
