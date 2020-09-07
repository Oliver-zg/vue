<template>
  <div id="app">
    <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>
    <router-link to="/Home">首页</router-link>
    <router-link to="/About">关于</router-link>
    <router-link v-bind:to="'/User/'+ userId">用户</router-link>
    <router-link :to="{path:'/Profile',query:{name:'zg'}}">档案</router-link>
    <button @click="ProfileClick">档案</button>
    <!-- <router-view></router-view> -->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'111'
    }
  },
  methods:{
    //通过代码的方式修改路由
    homeclick(){
      this.$router.push('/Home');
    },
    aboutclick(){

    },
    ProfileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'zgzz'
        }
      })
    }
  }
}
</script>

<style>
</style>
