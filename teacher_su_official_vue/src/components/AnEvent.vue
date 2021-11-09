<template>
        <div>
            <h1 class="text-center">Events</h1>
            <div class="d-flex align-items-center justify-content-evenly flex-wrap">
            <div v-for="list in lists" :key="list.id" class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center justify-content-center p-1">
                    <img :src="'http://api.teachersucenter.com' + list.image" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ renderTitle(list.title) }}</h5>
                        <p class="card-text">{{ renderDescription(list.description) }}</p>
                        <router-link :to="{ name: 'eventdetail', params:  {name:list.title} }">Read more</router-link>
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
            renderDescription(listDesc) {
                
                if(listDesc.length > 100) return listDesc.slice(0,100)+ "...";
                else if (listDesc.length === 0 ) return "no description";
                else return listDesc
            },
            renderTitle(listTitle) {
                
                if(listTitle.length > 50) return listTitle.slice(0,50)+ "...";
                else if (listTitle.length === 0 ) return "no title";
                else return listTitle
            }
        },
         mounted(){
            axios.get("http://api.teachersucenter.com/api/temp/news")
                .then(response =>{
                    
                    this.lists = response.data
                    console.log(this.lists)
                })
        },
        
       
    }
</script>

<style scoped>

   .cimg{
       width: 300px;
   }
  
</style>