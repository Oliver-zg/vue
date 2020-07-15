<template>
  <div class="title">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  name:'App',
  components:{
    Cpn
  },
  data(){
    return {
      message:'Hello Webpack'
    }
  }
}
</script>

<style>
.title{
  color: blueviolet;
}
</style>