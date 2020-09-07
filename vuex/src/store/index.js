import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import modulesA from './modules/modulesA'

Vue.use(Vuex)

const state = {
  counter: 0,
  students: [
    {name:'zg',age:'18'},
    {name:'zg',age:'19'},
    {name:'zg',age:'20'},
    {name:'zg',age:'17'},
    {name:'zg',age:'16'},
    {name:'zg',age:'15'}
  ]
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {
    a: modulesA
  }
})

export default store