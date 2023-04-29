import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: null
  },
  getters: {
    showElement(state) {
      return state.characters
    }
  },
  mutations: {
    addElement(state){
      state.characters.push({ name: state.character })
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
