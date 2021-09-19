<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Courses</h5>
            </div>
        </div>

        <div class="row">
            <div class="col-12 p-0">
                <div class="Banner-img">
                    <div class="Banner">
                        <Header class="Banner-text text-light" title="Choose your favourite course"></Header>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header"
    export default {
        name:'Courses',
        components:{Header}
    }
</script>

<style scoped>
    .Banner-img{
        background-image: url(https://images.unsplash.com/photo-1516053256215-94022213b13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .Banner{
        background-color: rgba(74, 75, 75, 0.466);
        height: 20vh;
        min-height: 30vh;
    }
    .Banner-text{
        padding: 10px;
        
    }
</style>