// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const cpn = {
  template:`<div>{{message}}</div>`,
  data(){
    return {
      message: '我是组件Message'
    }

  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function(createElement){
    //createElement的用法
    //1、普通用法 createElement('标签',{标签的属性},['内容'])
    // return createElement('h2',{class:'box'},['Hello Vue'])
    //2、传入组件
    return createElement(App)
  }
})
