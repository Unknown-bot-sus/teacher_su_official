<template>
    <div class="d-flex flex-wrap justify-content-center align-items-center  enImg-con">
              <div class="en-img">
                <img :src="image" style="width:100%;height:100%;" alt="">
              </div>
              <div>
                <p class="text-danger text-decoration-underline fw-bold fs-4">{{ event_title }}</p>
                <p class="fs-5 fw-bold">{{ event_time }}</p>
              </div>
    </div>
</template>

<script>
    export default {
        name:"Events",
        props:{
            event_title:String,
            event_time:String,
            image:String
        }
    }
</script>

<style lang="scss" scoped>
.en-img{
   width: 200px;
   height: 120px;
   padding: 5px 10px;
}
</style>