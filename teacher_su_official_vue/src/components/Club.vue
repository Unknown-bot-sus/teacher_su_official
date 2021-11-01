<template>
    <div class="row my-3 mx-1 my-md-5 d-flex align-items-center justify-content-between" :class="img_dir">
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center my-4 wow animate__fadeInUp">
                <img :src="require(`../assets/img/${fileName}`)" :alt="title + 'pic'" class="image img-thumbnail">
            </div>
            <div class="col-12 col-md-6 wow animate__fadeInUp">
                <Header :title="title" class="text-center courses-text mb-4"></Header>
                <p>{{ description }}</p>
            </div>
    </div>
</template>
<script>
import Header from "./Header.vue";
import WOW from "wow.js";
import image from "url";
export default {
    name: "Club",
    components: {Header},
    props: {
        fileName: String,
        title: String,
        description: String,
        img_dir: String,
    },
    mounted () {
        var wow = new WOW(
      {
        boxClass:     'wow',      
        animateClass: 'animate__animated', 
        offset:       0,          
        mobile:       true,       
        live:         true,       
        callback:     function(box) {
        },
        scrollContainer: null,   
        resetAnimation: true,     
      }
    );
    wow.init();
  },
}
</script>
<style scoped>
    .left{
        flex-direction: row;
    }

    .right{
        flex-direction: row-reverse;
    }
</style>