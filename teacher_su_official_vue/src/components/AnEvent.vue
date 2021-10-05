<template>
        <div>
            <div  v-for="list in lists" :key="list.id" class="d-flex align-items-center justify-content-between border border-2 p-1 p-md-3 mb-3" >
                <div class="card-img d-flex align-items-center justify-content-center">
                    <img :src="list.urlToImage" class="cimg" alt="">
                </div>
                <div class="card-text">
                    <p class="fw-bold">{{ list.title }}</p>
                    <p>{{ list.description }}</p>
                    <p>read more</p>
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
   .cimg{
       width: 300px;
   }
   .card-text{
       width: 60%;
   }
   @media only screen and (max-width: 1383px){
       .cimg{
           width: 200px;
        }
   }
</style>