import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character:[]
  },
  getters: {
    showElement(state){
      return state.character
    }
  },
  mutations: {
    addElement: (state)=>{
      state.character.push({name: 'name'})
  }
  },
  actions: {
  },
  modules: {
  }
})
