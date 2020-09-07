//配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
/* import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue' */

//通过Vue.use，安装插件
Vue.use(Router)
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const News = () => import('../components/News.vue')
const Message = () => import('../components/Message.vue')
const Profile = () => import('../components/Profile.vue')

const router = new Router ({
  //配置路由和组件之间的应用关系
  routes: [
    //默认路径
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home,
      meta: {
        title: '首页'
      },
      children:[
        {
          path:'/',
          redirect: 'News'
        },
        {
        path: 'News', // 路由嵌套不用加'/'
        component: News
      },
      {
      path: 'Message',
      component: Message
      }]
    },
    {
      path: '/About',
      component: About,
      meta: {
        title: '关于'
      },
      beforeEnter:(to,from,next) => {
        next()
      }
    },
    {
      path: '/User/:id',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/Profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
//导航守卫
//全局前置守卫（guard）
router.beforeEach((to,from,next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title;
  next()
});
//全局后置钩子
router.afterEach((to,from) => {
  
})
export default router
