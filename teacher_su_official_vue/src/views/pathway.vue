<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Career opportunity</h5>
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-12 col-md-6 my-3 my-md-5">
                <img src="../assets/img/register1.png" style="width:100%;" alt="">
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-12 col-md-6 my-3 my-md-5">
                <img src="../assets/img/register.png" style="width:100%;" alt="">
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-12 col-md-6 my-3 my-md-5 img-thumbnail">
                <img src="../assets/img/ieltsstep.png" style="width:100%;" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"pathway"
    }
</script>

<style lang="scss" scoped>

</style>