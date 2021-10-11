<template>
        <div>
            <div  v-for="list in lists" :key="list.id" class="d-flex align-items-center justify-content-between border border-success border-2 p-1 p-md-3 mb-3" >
            <div class="card-img d-flex align-items-center justify-content-center">
                <img :src="list.urlToImage" style="width:250px;" alt="">
            </div>
            <div class="card-text">
                <p class="fw-bold">{{ list.title }}</p>
                <p>{{ list.description }}</p>
                <router-link :to="{ name: 'newsdetail', params:  {name:list.title} }">read more</router-link>
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
                lists: []
            } 
        },
         mounted(){
            axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=af767d5fb9574acbb3fa4a7a0959f9dd")
                .then(response =>{
                    this.lists = response.data.articles;
                    console.log(this.lists);
                    
                })
        }
       
    }
</script>

<style scoped>
   .card-img{
       width: 40%;
   }
   .card-text{
       width: 60%;
   }
</style>