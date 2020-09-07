export default  {
  powerCount(state) {
    return state.counter * state.counter
  },
  more20(state) {
    return state.students.filter(s => s.age >= '18')
  },
  more20Length(state,getters) {
    return getters.more20.length
  }
}