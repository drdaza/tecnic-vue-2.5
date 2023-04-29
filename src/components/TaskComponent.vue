<template>
    <div class="task-wrapper">
        <h1>{{taskMessage}}</h1>
        <!-- <h1>{{ changeFunction() }}</h1> -->
        <input  v-model="title" type="text">
        <h1>{{ title }}</h1>
        
        <button @click="addCharacter()">addElementState</button>

        <h1 v-for="character of this.$store.state.characters">{{character.name}}</h1>
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
        addCharacter(){
            this.$store.state.character = this.title;
            this.$store.dispatch('addElementToState');
            this.title = ''
        }
    },
    computed:{
        firstComputed(){
           
        }
    },
    

})
</script>