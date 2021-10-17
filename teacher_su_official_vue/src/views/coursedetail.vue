<template>
    <div>
        this is coursedetail {{ $route.params.id }} 
        {{ $route.params.title }}
        {{ $route.params.description }}
        
    </div>
</template>

<script>
    export default {
        name:"coursedetail"
    }
</script>

<style lang="scss" scoped>

</style>