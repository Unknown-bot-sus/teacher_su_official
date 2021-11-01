<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Career opportunity</h5>
            </div>
        </div>
         <div class="row">
            <div class="col-12 p-0">
                <div class="banner-img">
                    <div class="banner d-flex align-items-center justify-content-center p-md-5">
                        <div class="p-5">
                            <Header class="banner-text text-light" title="Our Community"></Header>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Club
        v-for="(club, index) in data"
        :key="index"
        v-bind="club"
        :img_dir="img_dir[index % 2]"
        ></Club>
    </div>
</template>

<script>
import Club from "../components/Club.vue"
import WOW from "wow.js"
    export default {
        name:"Community",
        components: {
            Club,
        },
        data() {
            return {
                img_dir: ['left', 'right'],
                data: [
                    {fileName:"debate.png", title: "Debate Club", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi placeat optio unde vero eum illo nemo laboriosam ipsum, officiis deserunt praesentium aperiam beatae et provident cupiditate fugiat dolores. Incidunt!loLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quidem similique iste, tenetur voluptatem repellat error dolores tempora accusantium, autem fugiat nemo, quisquam esse necessitatibus reiciendis ratione vitae. Labore."},
                    {fileName:"enter.png", title: "Entertainment Club", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi placeat optio unde vero eum illo nemo laboriosam ipsum, officiis deserunt praesentium aperiam beatae et provident cupiditate fugiat dolores. Incidunt!loLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quidem similique iste, tenetur voluptatem repellat error dolores tempora accusantium, autem fugiat nemo, quisquam esse necessitatibus reiciendis ratione vitae. Labore."},
                    {fileName:"art.png", title: "Art Club", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi placeat optio unde vero eum illo nemo laboriosam ipsum, officiis deserunt praesentium aperiam beatae et provident cupiditate fugiat dolores. Incidunt!loLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quidem similique iste, tenetur voluptatem repellat error dolores tempora accusantium, autem fugiat nemo, quisquam esse necessitatibus reiciendis ratione vitae. Labore."},
                    {fileName:"yoga.png", title: "Yoga Club", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi placeat optio unde vero eum illo nemo laboriosam ipsum, officiis deserunt praesentium aperiam beatae et provident cupiditate fugiat dolores. Incidunt!loLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quidem similique iste, tenetur voluptatem repellat error dolores tempora accusantium, autem fugiat nemo, quisquam esse necessitatibus reiciendis ratione vitae. Labore."},
                    {fileName:"counselling.jpg", title: "Telecounselling Club", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi placeat optio unde vero eum illo nemo laboriosam ipsum, officiis deserunt praesentium aperiam beatae et provident cupiditate fugiat dolores. Incidunt!loLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quidem similique iste, tenetur voluptatem repellat error dolores tempora accusantium, autem fugiat nemo, quisquam esse necessitatibus reiciendis ratione vitae. Labore."},
                    {fileName:"comet.jpg", title: "Comet Conversation Club", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi placeat optio unde vero eum illo nemo laboriosam ipsum, officiis deserunt praesentium aperiam beatae et provident cupiditate fugiat dolores. Incidunt!loLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quidem similique iste, tenetur voluptatem repellat error dolores tempora accusantium, autem fugiat nemo, quisquam esse necessitatibus reiciendis ratione vitae. Labore."},
                    {fileName:"tandl.jpg", title: "Teaching and Learning English Club", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi placeat optio unde vero eum illo nemo laboriosam ipsum, officiis deserunt praesentium aperiam beatae et provident cupiditate fugiat dolores. Incidunt!loLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quidem similique iste, tenetur voluptatem repellat error dolores tempora accusantium, autem fugiat nemo, quisquam esse necessitatibus reiciendis ratione vitae. Labore."},
                ],
            }
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

<style  scoped>
.image{
    width: 40vw;
}
.banner{
        background-color: rgba(148, 148, 148, 0.459);
        height: 30vh;
        min-height: 30vh;
    }
    .banner-img{
        background-image: url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
@media only screen and (max-width:766px) {
    .image{
        width: 80vw;
    }
}
@media only screen and (max-width: 484px){
        .courses-text{
        font-size: 1.5rem;
        }
}
@media only screen and (min-width: 757px){
        .banner-text{
            font-size: 4rem;
        }
    }
    @media only screen and (max-width: 427px){
        .banner-text{
            font-weight: normal;
            font-size: 2.6rem;
        }
    }
</style>