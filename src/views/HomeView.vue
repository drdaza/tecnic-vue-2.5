<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TaskComponent :task-message="'is a task'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskComponent from '@/components/TaskComponent.vue';

export default {
  name: 'HomeView',
  components: {
    TaskComponent
  },

}
</script>
