export default {
  state: {
    name: '张三'
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions: {
    /* aUpdateName(context,payload) {
      setTimeout(() => {
        context.commit('updateName',payload.message) 
        payload.success()
      },1000)
    } */
    aUpdateName(context,payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          //请求
          context.commit('updateName',payload) 
          resolve('成功')
        },1000)
      })
    }
  },
  getters: {
    fullName(state) {
      return state.name + '你好'
    },
    fullName2(state,getters,root){
      return getters.fullName + root.counter
    }
  }

}