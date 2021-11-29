<template>
        <div>
            <h1 class="text-center">Announcements</h1>
            <div class="d-flex align-items-center justify-content-evenly flex-wrap">
            <div v-for="list in lists" :key="list.id" class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center justify-content-center p-1">
                    <img :src="'http://api.teachersucenter.com' + list.image" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ renderText(list.title, 50, 'no title') }}</h5>
                        <p class="card-text">{{ renderText(list.description, 100, 'no description') }}</p>
                        <router-link to='#'>Read more</router-link>
                    </div>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
</template>

<script>
import axios from "axios"
    export default {
        name:"AnEvent",
        data() {
            return {
                lists: [],
            } 
        },
        methods: {
            renderText(text, limit, fallback) {
                return text.length > limit ? text.slice(0, limit) + "..." :
                        text.length === 0 ? fallback : text;
            },
        },
        mounted(){
            axios.get("http://api.teachersucenter.com/api/temp/news")
                .then(response =>{
                    this.lists = response.data;
                    console.log('lists');
                })
        },
    }
</script>

<style scoped>

   .cimg{
       width: 300px;
   }
  
</style>