<template>
    <div class="task-wrapper">
        <h4>{{taskMessage}}</h4>

        <input  v-model="title" type="text">
        
        
        <button @click="addCharacterEmit()">addElementState</button>

    </div>
</template>
<script>

export default ({
    name: 'CreateTaskComponent',
    props:{
        taskMessage: String,
    },
    data: () => ({
      title: '',
    }),
    methods: {
        changeFunction(){
            this.title = this.title.split(" ")
        },
        addCharacterEmit(){
            this.$emit('addCharacterEmit', this.title)
            
        },
    },
    computed:{
        firstComputed(){
           
        }
    },
    

})
</script>