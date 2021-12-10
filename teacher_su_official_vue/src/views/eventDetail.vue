<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-center flex-column">
                <img :src="`https://api.teachersucenter.com${event.image}`" class="img-thumbnail" alt="">
            </div>
            <div class="col-12">
                    <h1 class="my-3">{{ event.title }}</h1>
                    <p>{{ event.content}} </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:"eventDetail",
        data() {
            return {
                event: []
            }
        },
        mounted(){
            axios.get(`https://api.teachersucenter.com/api/temp/news/${this.$route.params.id}`)
                .then(response =>{
                    this.event = response.data;
                })
        },
    }
</script>

<style lang="scss" scoped>

</style>