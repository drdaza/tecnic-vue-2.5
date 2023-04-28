<template>
    <div class="task-wrapper">
        <h1>{{taskMessage}}</h1>
        <!-- <h1>{{ changeFunction() }}</h1> -->
        <input  v-model="title" type="text">
        <h1>{{ title }}</h1>
        
        <button @click="addElementToState()">addElementState</button>
        <button @click="showElementFromState()"></button>
        <h1>{{showElementFromState}}</h1>
    </div>
</template>
<script>

export default ({
    name: 'TaskComponent',
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
        addElementToState(){
            this.$store.commit("addElement")
        },
        showElementFromState(){
            return this.$store.getters.showElement
        }
    },
    computed:{
        firstComputed(){
            return this.$store.getters.showElement
        }
    },
    

})
</script>