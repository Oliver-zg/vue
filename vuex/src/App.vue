<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h3>{{$store.state.counter}}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <h2>{{$store.getters.more20}}</h2>
    <h2>{{$store.getters.more20Length}}</h2>
    <hello-vuex></hello-vuex>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
  </div>
  
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data() {
    return {
      message: '我是App组件'
    }
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(i) {
      this.$store.commit('incrementCount',i)
    },
    updateName() {
      this.$store.commit('updateName','lisi')
    },
    /* asyncUpdateName() {
      this.$store.dispatch('aUpdateName',{
        message: '我是携带的信息',
        success: () => {
          console.log('成功')
        }
      })
    } */
    asyncUpdateName() {
      this.$store
      .dispatch('aUpdateName','我是携带的信息')
      .then(res => {
        //返回结果
        console.log(res)
      })
    }
  },
  computed: {
    /* more20() {
      return this.$store.state.students.filter(s => s.age >= '18')
    } */
  }
}
</script>

<style>
</style>
