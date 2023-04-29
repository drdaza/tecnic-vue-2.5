import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: '', 
    findTask: 0
  },
  getters: {
    showElement(state) {
      return state.tasks
    }
  },
  mutations: {
    addElement(state) {
      state.tasks.push({
        idTask: state.tasks.length+1,
        stateOfTask: false,
        taskName: state.task
      })
    },
    changeStateOfTask(state){
      const taskFinded = state.tasks.find(task => task.idTask === state.findTask)
      const indexOfTask = state.task.indexOf(taskFinded)
      taskFinded.stateOfTask = true
      state.tasks.splice(indexOfTask, 1, taskFinded)
    }
  },
  actions: {
    addElementToState(context) {
      context.commit('addElement')
    },
    changeStateOfTaskToState(context){
      context.commit('changeStateOfTask')
    }
  },
  modules: {
  }
})
