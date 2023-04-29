import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: ''
  },
  getters: {
    showElement(state) {
      return state.tasks
    }
  },
  mutations: {
    addElement(state){
      state.tasks.push( { stateOfTask: false,
        taskName: state.task} )
    },
  },
  actions: {
    addElementToState( context ) {
      context.commit('addElement')
    },
  },
  modules: {
  }
})
