<template>
  <div class="home">
    <h1>Simple Task List</h1>
    <CreateTaskComponent @addCharacterEmit="changeContainerOfEmit" :task-message="'is a task'"/>
    <TaskComponent @emitStateOfTask="changeStateOfTask"  v-for="task of $store.state.tasks" :task="task"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTaskComponent from '@/components/CreateTaskComponent.vue';
import TaskComponent from '@/components/TaskComponent.vue';

export default {
  name: 'HomeView',
  data: ()=>({
    containerOfEmit: ''
  }),
  methods:{
    changeContainerOfEmit(emit){
      console.log(emit);
      this.containerOfEmit = emit
      this.$store.state.task = emit;
      this.$store.dispatch('addElementToState');

    },
    changeStateOfTask(emit){
      console.log(emit);
      this.$store.state.findTask = emit
      this.$store.dispatch('changeStateOfTaskToState')
    }
  },
  components: {
    CreateTaskComponent,
    TaskComponent
  },


}
</script>
