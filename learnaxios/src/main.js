import Vue from 'vue'
import App from './App'
import router from './router'
/* import axios from 'axios' */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
/* axios({
  url:'http://123.207.32.32:8000/home/multidata',
}).then(res => {
  console.log(res)
})
//axios全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
//axios 发送 并发请求
axios.all(
  [
  axios({url:'/home/multidata'}),
  axios({
    url:'/home/data',
    params: {
      type: 'sell',
      page: 5
    }})
  ]).then(res => {
    console.log(res)
})

//创建axios实例
const instance1 =  axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})
instance1({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
}).then(res => {

}) */

import {request} from './network/request'

/* request({
  url:'/home/multidata',
},res => {
  console.log(res)
},err => {
  console.log(err)
}) */
request({
  url:'/home/multidata',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})