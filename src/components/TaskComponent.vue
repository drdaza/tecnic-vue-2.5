<template>
    <div :class="['task-wrapper', renderStateOfTask]">
        <h2>{{ task.taskName }}</h2>
        <input @click="emitStateOfTask(task.idTask)" :disabled="task.stateOfTask" v-model="taskChecker" type="checkbox" name="taskState" id="">
    </div>
</template>
<script>
export default{
    name: 'TaskComponent',
    props: {
        task:{
            type:Object
        } 
    },
    data: ()=>({
        taskChecker: false,
        
    }),
    methods:{
        emitStateOfTask(id){
            this.$emit('emitStateOfTask', id)
        }
    },
    computed:{
        renderStateOfTask(){
           return (this.$props.task.stateOfTask === false)? 'pendingTask': 'doneTask'
        }
    },
}
</script>
<style lang="scss" scoped>
.task-wrapper{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
}
.pendingTask{
    background-color: #e8e8e8;
}

.doneTask{
    background-color: aliceblue;
    text-decoration: line-through;
}
</style>