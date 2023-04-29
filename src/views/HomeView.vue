<template>
  <div class="home">
    <h1>Simple Task List</h1>
    <CreateTaskComponent @addCharacterEmit="changeContainerOfEmit" :task-message="'is a task'"/>
    <h3 v-for="task of $store.state.tasks">
      {{task.taskName}}
    </h3>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTaskComponent from '@/components/CreateTaskComponent.vue';

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

    }
  },
  components: {
    CreateTaskComponent
  },


}
</script>
