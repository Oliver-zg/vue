<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/Home/News">新闻</router-link>
    <router-link to="/Home/Message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    
  },
  destroyed() {
    
  },
  activated() {
    //跳转到之前保存的path
    this.$router.replace(this.path);
  },
  beforeRouteLeave(to,from,next) {
    //保存当前path
    this.path = this.$route.path;
    next();
  }
}
</script>

<style>

</style>