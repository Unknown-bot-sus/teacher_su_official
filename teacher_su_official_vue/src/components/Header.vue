<template>
    <h1 class="header">{{ title }}</h1>
</template>

<script>
    export default {
        name:"Header",
        props:{
            title:{
                type:String,
                default:"Header"
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
    .header{
        font-size: 3.1rem;
        font-family: 'Roboto Slab', serif;
    }
</style>