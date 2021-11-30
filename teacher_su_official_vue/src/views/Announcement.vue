<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Announcement</h5>
            </div>
        </div>

        <main class="row">
            <div class="col-6 card-con mx-auto">
                    <Event v-for="(event, index) in events" :key="index" :event="event"/>
            </div>
        </main>
    </div>
</template>

<script>

import Event from "@/components/Event.vue"
import axios from "axios"

    export default {
        name:"Announcement",

        data(){
            return {
                events: [],
            }
        },
        
        components: {
            Event
        },

        methods: {
            fetchData(link){
                axios.get(link)
                    .then(response=>{
                        this.events.push(...response.data.results);
                        if(response.data.next != null) this.fetchData(response.data.next);
                    })
            }
        },

        mounted(){
            this.fetchData("http://api.teachersucenter.com/api/temp/news")
        },
    }
</script>

<style lang="scss" scoped>
    .card-con{
        height: 100vh;
        overflow: scroll;
    }
    
    .card-con::-webkit-scrollbar {
    display: none;
    }

    .card-con {
    -ms-overflow-style: none;  
    scrollbar-width: none; 
    }
</style>