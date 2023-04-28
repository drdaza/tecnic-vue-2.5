<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="I am learning"/>
    <TaskComponent :task-message="'is a task'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TaskComponent from '@/components/TaskComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TaskComponent
  },

}
</script>
