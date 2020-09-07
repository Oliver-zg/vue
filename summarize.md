### 一、组件化开发

#### 1.1 父子组件的访问

- $children/$refs
- $parent/$root

#### 1.2 slot的使用

- 基本使用
- 具名插槽
- 编译的作用域
- 作用域插槽

### 二、前端模块化

#### 2.1 为什么要用模块化

- 简单写js带来的问题
- 闭包引起代码不可复印
- AMD/CMD/CommonJS

### 三、webpack

#### 3.1 什么是webpack

- webpack和gulp对比
- webpack依赖环境
- 安装webpack

#### 3.2  webpack的起步

- webpack命令
- webpack配置

#### 3.3 webpack的loader

#### 3.4 webpack中配置vue

- vue-loader

#### 3.5 webpack的plugin

#### 3.6 搭建本地服务器

- webpack-dev-server

#### 3.7 配置文件分离

### 四、Vue CLI

#### 4.1 什么是CLI

- 脚手架是什么东西
- CLI依赖webpack，node，npm
- 安装CLI3，并拉取CLI2模块

#### [4.2 CLI2初始化项目的过程](C:\Users\Lenovo\Desktop\cli.md)

#### 4.3 CLI2生产的目录结构的解析

**Vue程序运行过程**

![image-20200804150235408](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200804150235408.png)



**runtime-compiler和runtime-only的区别**

> - runtime-compiler 
>   - 解析template过程：template->ast->render->virtual  dom->UI
>
> - runtime-only  
>
>   - 解析template过程：render->virtual  dom->UI 
>   - .vue文件中的template是由谁处理了？是由vue-template-compiler处理
>
>   - 1）性能更高  2）代码量更少

h() = createElement()  传入组件



![image-20200805152410356](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805152410356.png)

![image-20200805152439083](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805152439083.png)

#### 4.3 CLI3生产的目录结构的解析



### 五、Vue-Router <font color="#FF0000">★</font>

![image-20200810102810845](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200810102810845.png)

> 什么是前端渲染、前端路由，什么是后端渲染、后端路由？
>
> - 后端渲染：jsp   网页在服务器端生成 
>
>   后端路由：后端处理URL和页面之间的映射关系
>
> - 前端渲染 ：浏览器中的显示的大部分网页，都是由前端js代码在浏览器中执行，最终渲染出来，后端只负责提供数据
>
>   前端路由：SPA(simple page application)：单页面富应用，整个网站只有一个html页面，SPA的主要特点是在前后端分离的基础上加一层前端路由，前端检测 url 的变化，截获 url 地址，然后解析来匹配路由规则。前端路由的核心是改变URL，但是页面不进行整体的刷新。

- <router-link>  vue-router的内置组件，会被渲染成一个a标签
  - 属性：
    - to ：用于指定跳转的路径
    - tag： 指定渲染成什么组件，比如tag=“li” 会被渲染成<li>元素
    - replace： 使用replace不会留下history记录，可以控制不能返回上一页
    - active-class: <router-link>对应的路由匹配成功时，会给当前元素设置一个router-link-active的class，class名可以在router里面自定义

- <router-view>  根据当前路径，动态渲染出不同的组件
- 通过代码跳转路由 ```this.$router.push('')```

**动态路由**

$router：router对象，路由栈

$route：获取当前活跃的route  ```$route.params.xxx```：得到url动态的那一部分

**路由的懒加载**

- 定义：把不同路由对应的组件分割成不同的代码块，当路由被访问时才加载对应组件

- dist下面的文件
  - app.xxx.js——当前应用程序开发的所有代码（业务代码）
  - manifest.xxx.js—— 为打包了的代码做底层支撑
  - vendor.xxx.js——第三方（vue/vue-router/axios/bs）

- 应用：

![image-20200819205339019](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819205339019.png)

**路由嵌套**

**传递参数**

![image-20200819215527766](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819215527766.png)

![image-20200819221445355](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819221445355.png)

![image-20200819221516430](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819221516430.png)

**导航守卫**

全局：

```js
//全局前置守卫（guard）
router.beforeEach((to,from,next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title;
  next()
});
//全局后置钩子
router.afterEach((to,from) => {
  
})
```

路由独享

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

**keep-alive**

router-view如果直接被包在keep-alive里面，所有路径匹配到的视图组件都会被缓存，组件不会被频繁创建和销毁，重新进入或者退出 activated/deactivated  会被回调

属性：

- exclude 不缓存哪些组件
- include 只有匹配的组件才会被缓存

### 六、Vuex

> Vuex是一个专为vue.js应用程序开发的状态管理模式
>
> 集中式存储管理应用的所有组件状态

把需要多个组件共享的变量全部存储在一个对象里

![image-20200903113122103](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200903113122103.png)

```js
import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 
    counter: 0
  },
  mutations: { //同步操作
  },
  actions: { //异步操作
  },
  getters: { //state 中派生出一些状态
  },
  modules: { //将 store 分割成模块
  }
})

export default store
```

mutations 携带参数



### 七、网络请求封装(axios)

```js
axios({
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
```



- method 默认 get
  - get 传参 params: { }
  - post 传参 data: {}

**axios实例**

每个实例都有自己独立的配置，针对不用服务器进行请求

```js
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
  
})
```

**axios模块封装**

request.js

```js
import axios from "axios";

export function request(config) {
  /* const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance(config)
  .then(res => {
    success(res)
  }
  ).catch(err => {
    error(err)
  }) */
 /*  return new Promise((resolve,reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    instance(config)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
    
  }) */
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  return instance(config)

}
```

使用

```js
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
```

**拦截器**

```js
//请求拦截
instance.interceptors.request.use(config => {
    console.log(config)
    return config
  },err => {
    console.log(err)
  })
//相应拦截
instance.interceptors.response.use(res => {
    
},err => {
    
})
```

拦截器使用场景：

1. config中的一些信息不符合服务器要求，要修改
2. 每次发送网络请求时，都希望在界面中显示一个请求的图标
3. 某些网络请求（比如登录 ），必须携带一些特殊的信息

#### 补充

**箭头函数**

- this的使用  this引用的就是最近作用域中的this，它会向外层作用域中一层层查找this，直到this有定义

#### Promise

异步编程的一种解决方案

对异步操作进行封装

什么情况下会用到Promise？

一般情况下是有异步操作时，使用Promise对这个异步操作进行封装

```js
 new Promise((resolve,reject) => {
    setTimeout(()=>{
        //成功的时候调用
      	resolve('Hello World') 
        //失败的时候调用 reject('error')
    },1000);
  }).then(data => {
     console.log(data)
 }).catch(err => {
     console.log(err)
 })

//另一种写法
 new Promise((resolve,reject) => {
    setTimeout(()=>{
        //成功的时候调用
      	resolve('Hello World') 
        //失败的时候调用 reject('error')
    },1000);
  }).then(data => {
     console.log(data)
 }, err => {
     console.log(err)
 })
```

**Promise.all()**

两个请求完成后再执行之后的代码

```js
Promise.all(
    [
      new Promise((reslove,reject) => {
        setTimeout(() => {
          reslove('1')
        },2000)
      }),
      new Promise((reslove,reject) => {
        setTimeout(() => {
          reslove('2')
        },1000)
      })
    ]
  ).then(arr => {
    console.log(arr)
  })
```



Vue.delete / .set 可以响应式