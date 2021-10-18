<template>
    <div class="container">
        <div class="row my-5 mx-1">
            <div class="col-12 d-flex align-items-center bg-primary  text-light justify-content-around flex-wrap border border-2 border-dark p-2 p-md-5">
                <div class="d-flex align-items-center justify-content-center text-center border border-light border-2 fs-1 fw-bold img">
                    <p>{{$route.params.title}}</p>
                </div>
                <div class="img-text mt-4 mt-md-0">
                    <p><b>Title</b> - {{ $route.params.title }}</p>
                    <p><b>Description</b> - {{ $route.params.description }}</p>
                    <p><b>Recommended age</b> - {{ $route.params.age }}</p>
                    <a href="https://www.facebook.com/messages/t/270139473932097" class="btn btn-outline-light">Apply now</a> <router-link to="/register" class="text-light mx-2">How to apply ?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"coursedetail"
    }
</script>

<style lang="scss" scoped>
    .img{
        width: 300px;
        height: 300px;
    }
    .img-text{
        width: 300px;
    }
</style>