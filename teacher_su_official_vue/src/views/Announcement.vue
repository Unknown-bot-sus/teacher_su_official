<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Announcement</h5>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12 col-lg-8 pt-2 p-md-5">
                <div class="card-con mt-2 py-3">
                    <AnEvent></AnEvent>
                </div>
            </div>
            <div class="col-12 col-lg-4 d-lg-flex align-items-center justify-content-center flex-column">
                <div class="row mt-4">
                    <div class="col-12 d-lg-flex align-items-center justify-content-center">
                        <div class="card">
                            <div class="card-header">
                                Latest announcements
                            </div>
                            <div class="card-body">
                                <LatestEvents></LatestEvents>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>

import AnEvent from "../components/AnEvent.vue"
import LatestEvents from "../components/LatestEvents.vue"

    export default {
        name:"Announcement",
        
        components: {
            AnEvent,LatestEvents
        }
    }
</script>

<style lang="scss" scoped>
    .card-con{
        height: 65vh;
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