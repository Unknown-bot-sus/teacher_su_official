<template>
<main class="container-fluid">
      <div class="row hero-banner">
        <div class="col-12 col-lg-12 py-3 py-md-5 d-flex align-items-center  homebanner-containercs">
          <div class="col-lg-6 py-5 BannerTesti">
            <Header class="BannerText text-light fw-light pe-lg-5 wow animate__backInRight" title="Providing quality education, wherever you are"></Header>
            <p class="text-light wow animate__backInRight">Start studying online now</p>
            <router-link :to="{name:'Register'}"><button class="btn btn-outline-light wow animate__backInRight" >REGISTER NOW <i class="fas fa-chevron-right"></i></button></router-link>
          </div>
        </div>

        <div class="col-12 col-sm-6"  id="homebanner">

        </div>
      </div>

      <div class="row mt-5 m-md-0">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="bg-light  p-md-5 d-flex flex-column align-items-center courses">
                <Header title="Education Through Virtualization" class="text-center courses-text wow animate__fadeInUp"></Header>
                <p class="text-center">Start your academic journey at one of the largest online education institutes in Myanmar.</p>
                  <router-link :to="{name:'Courses'}"><button class="btn btn-outline-dark wow animate__fadeInUp">BROWSE CLASSES <i class="fas fa-chevron-right"></i></button></router-link>
            </div>
        </div>
      </div>

      <div class="row my-5 mb-5">
        <div class="col-12">
            <Header title="Why Choose Teacher Su" class="text-center courses-text wow animate__fadeInUp"></Header>
            <div class="chItem-con wow animate__fadeInUp">

                <div class="d-flex align-items-center justify-content-left justify-content-lg-evenly flex-lg-wrap mt-2 mt-md-5 chItem" >
            
              <div style="min-width:300px;" class="d-flex align-items-center justify-content-center flex-column p-3 wow animate__fadeInUp item">
                <i class="fs-1 fas fa-briefcase item-hover"  style="border:2px solid black;border-radius:50%;padding:20px;"></i>
                <h3 class="fw-bold text-danger mt-2">Career</h3>
                <p class="text-center">See the career opportunities provided at our center.</p>
                <router-link :to="{name:'Career'}"><p class="text-primary">Find out more</p></router-link>
              </div>

              <div style="min-width:300px;" class="d-flex align-items-center justify-content-center flex-column p-3 wow animate__fadeInUp item">
                <i class="fs-1 fas fa-users item-hover"  style="border:2px solid black;border-radius:50%;padding:20px 15px;"></i>
                <h3 class="fw-bold text-danger mt-2">Community</h3>
                <p class="text-center">Have a look at the Teacher Su community.</p>
                <router-link :to="{name:'Community'}"><p class="text-primary">Find out more</p></router-link>
              </div>

              <div style="min-width:300px;margin-top:20px;" class="d-flex align-items-center justify-content-center flex-column p-3 wow animate__fadeInUp item">
                <i class="fs-1 fas fa-hands-helping item-hover"  style="border:2px solid black;border-radius:50%;padding:20px 15px;"></i>
                <h3 class="fw-bold text-danger mt-2">Help</h3>
                <p class="text-center">Are you lost? Unfamiliar with the tools we are using? You can find the resources here.</p>
                <router-link :to="{name:'Help'}"><p class="text-primary">Find out more</p></router-link>
              </div>

              <div style="min-width:300px;margin-top:20px;" class="d-flex align-items-center justify-content-center flex-column p-3 wow animate__fadeInUp item">
                <i class="fs-1 fas fa-book item-hover"  style="border:2px solid black;border-radius:50%;padding:20px 22px;"></i>
                <h3 class="fw-bold text-danger mt-2">About</h3>
                <p class="text-center">Learn more about our center's vision and our young founder.</p>
                <router-link :to="{name:'About'}"><p class="text-primary">Find out more</p></router-link>
              </div>

              

            </div>

            </div>
        </div>
      </div>

      <div class="row my-5 ">
        <div class="col-12">
            <Header title="Start your studies at Teacher Su Centre" class="text-center mb-5 courses-text wow animate__backInRight"></Header>
            <div class="d-flex align-items-center justify-content-evenly flex-column">
              <div class="stu-img">
                <img src="../assets/img/Study2.png" style="width:100%;height:100%;" alt="">
              </div>
              <div class="row st-con mt-5 px-3">
                <div class="col-12 col-xl-6 p-3 ">
                <router-link :to="{name:'pathway'}">
                  <div class=" d-flex align-items-center justify-content-between border border-dark text-danger item-hover2 wow animate__backInRight">
                    <p class="m-0 px-1 fs-6 fw-bold ">Starting your first class</p>
                    <span class="w-50 p-0" style="border-left:25px solid transparent;border-bottom: 50px solid #103B7B;"></span>
                </div>
                </router-link>
                </div>
                <div class="col-12 col-xl-6 p-3 ">
                <router-link :to="{name:'Career'}">
                  <div class=" d-flex align-items-center justify-content-between border border-dark text-danger item-hover2 wow animate__backInRight">
                    <p class="m-0 px-1 fs-6 fw-bold ">Student opportunities</p>
                    <span class="w-50 p-0" style="border-left:25px solid transparent;border-bottom: 50px solid #103B7B;"></span>
                </div>
                </router-link>
                </div>
                <div class="col-12 col-xl-6 p-3 ">
                <router-link :to="{name:'Register'}">
                  <div class=" d-flex align-items-center justify-content-between border border-dark text-danger item-hover2 wow animate__backInRight">
                    <p class="m-0 px-1 fs-6 fw-bold ">How to apply</p>
                    <span class="w-50 p-0" style="border-left:25px solid transparent;border-bottom: 50px solid #103B7B;"></span>
                </div>
                </router-link>
                </div>
                <div class="col-12 col-xl-6 p-3 ">
                <router-link :to="{name:'Community'}">
                  <div class=" d-flex align-items-center justify-content-between border border-dark text-danger item-hover2 wow animate__backInRight">
                    <p class="m-0 px-1 fs-6 fw-bold ">Extra-curricular activites</p>
                    <span class="w-50 p-0" style="border-left:25px solid transparent;border-bottom: 50px solid #103B7B;"></span>
                </div>
                </router-link>
                </div>
              </div>
            </div>
        </div>
      </div>   

      <div class="row bg-primary my-5">
        <Header title="Our Success Stories" class="text-light text-center mt-5 courses-text"></Header>

        <div class="col-12 py-5 pb-5 d-block d-lg-none">
            <div id="bb" class="carousel slide" style="position:relative;" data-bs-ride="carousel">
                  
                  <div class="carousel-indicators" style="position:absolute;bottom:-50px;">
                    <button type="button" data-bs-target="#bb" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#bb" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#bb" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  
                   <div class="carousel-inner">

                      <div class="carousel-item active bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center mc-con">
                            <div class="mc-box d-flex align-items-center justify-content-evenly flex-column p-3">
                              <div class="mc-img">
                                <img src="../assets/img/wsw.jpeg" style="width:100%;height:100%;border-radius:50%;" alt="">
                              </div>
                              <div class="mc-text d-flex align-items-center justify-content-evenly flex-column text-center">
                                <h3>Wine Su Waddy</h3>
                                <p>"My English got a lot better. I was very motivated by the opportunities given here at the center, got a lot of nice friends and have always been feeling blissful by the kindness and warmness of Teacher Su."</p>
                              </div>
                              
                               
                              
                            </div>
                          </div>
                      </div>
                      <div class="carousel-item bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center mc-con">
                            <div class="mc-box d-flex align-items-center justify-content-evenly flex-column p-3">
                              <div class="mc-img">
                                <img src="../assets/img/smmk.jpg" style="width:100%;height:100%;border-radius:50%;" alt="">
                              </div>
                              <div class="mc-text d-flex align-items-center justify-content-evenly flex-column text-center">
                                <h3>Su Myat Min Khin</h3>
                                <p>"Teacher Su plus some teachers assisted me well. My very first bands in IELTS mock tests were just 5.5 and 6 in a nutshell but at the end of my IELTS journey, overall 7 with band 8 in Listening were what I have tried hard for."</p>
                              </div>
                              
                               
                              
                            </div>
                          </div>
                      </div>
                      <div class="carousel-item bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center mc-con">
                            <div class="mc-box d-flex align-items-center justify-content-evenly flex-column p-3">
                              <div class="mc-img">
                                <img src="../assets/img/bmo.jpeg" style="width:100%;height:100%;border-radius:50%;" alt="">
                              </div>
                              <div class="mc-text d-flex align-items-center justify-content-evenly flex-column text-center">
                                 <h3>Bhone Myat Oo </h3>
                                <p>"I had such great preparation in Duolingo English Test Class that I scored higher than my expectations. Teacher Su and assistant teachers were patient and paid close attention to every student. "</p>
                              </div>
                              
                               
                              
                            </div>
                          </div>
                      </div>

                      
                   </div>
            </div>
        </div>
        
        <div class="col-12 py-5 pb-5 d-none d-lg-block">
            <div id="aa" class="carousel slide" data-bs-ride="carousel">
                 
                   <div class="carousel-inner">

                      <div class="carousel-item active bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center rev-con">
                            <div class="rev-box d-flex align-items-center justify-content-evenly flex-column p-5">
                              <div class="rev-text d-flex align-items-center justify-content-evenly flex-column">
                                <p class="text-dark fs-2 text-center">"My English got a lot better. I was very motivated by the opportunities given here at the center, got a lot of nice friends and have always been feeling blissful by the kindness and warmness of Teacher Su."</p>
                                <p class="fw-bold fs-4">Wine Su Waddy</p>
                                <p class="text-muted">IELTS student</p>
                              </div>
                                <button class="btn btn-danger next py-3 px-4" @click="next()"> <i class="fas fs-1 fa-chevron-right"></i> </button>
                                <button class="btn btn-danger prev py-3 px-4" @click="prev()"> <i class="fas fs-1 fa-chevron-left"></i> </button>
                              <div class="rev-img shadow">
                                <img src="../assets/img/wsw.jpeg" style="width:100%;height:100%;" alt="">
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="carousel-item bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center rev-con">
                            <div class="rev-box d-flex align-items-center justify-content-evenly flex-column p-5">
                              <div class="rev-text d-flex align-items-center justify-content-evenly flex-column">
                                <p class="text-dark fs-2 text-center">"Teacher Su plus some teachers assisted me well. My very first bands in IELTS mock tests were just 5.5 and 6 in a nutshell but at the end of my IELTS journey, overall 7 with band 8 in Listening were what I have tried hard for."</p>
                                <p class="fw-bold fs-4">Su Myat Min Khin</p>
                                <p class="text-muted">IELTS student</p>
                              </div>
                                <button class="btn btn-danger next py-3 px-4" @click="next()"> <i class="fas fs-1 fa-chevron-right"></i> </button>
                                <button class="btn btn-danger prev py-3 px-4" @click="prev()"> <i class="fas fs-1 fa-chevron-left"></i> </button>
                              <div class="rev-img shadow">
                                <img src="../assets/img/smmk.jpg" style="width:100%;height:100%;" alt="">
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="carousel-item bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center rev-con">
                            <div class="rev-box d-flex align-items-center justify-content-evenly flex-column p-5">
                              <div class="rev-text d-flex align-items-center justify-content-evenly flex-column">
                                <p class="text-dark fs-2 text-center">"I had such great preparation in Duolingo English Test Class that I scored higher than my expectations. Teacher Su and assistant teachers were patient and paid close attention to every student. "</p>
                                <p class="fw-bold fs-4">Bhone Myat Oo</p>
                                <p class="text-muted">Duolingo student</p>
                              </div>
                                <button class="btn btn-danger next py-3 px-4" @click="next()"> <i class="fas fs-1 fa-chevron-right"></i> </button>
                                <button class="btn btn-danger prev py-3 px-4" @click="prev()"> <i class="fas fs-1 fa-chevron-left"></i> </button>
                              <div class="rev-img shadow">
                                <img src="../assets/img/bmo.jpeg" style="width:100%;height:100%;" alt="">
                              </div>
                            </div>
                          </div>
                      </div>
                   </div>
            </div>
        </div>
      </div>

      <div class="row align-items-center justify-content-center">
        <div class="col-12  wow animate__backInRight">
            <h3 style="font-family:'Roboto Slab', serif;" class="mb-4 fs-1 text-center">Announcements</h3>

            <div class="d-flex justify-content-evenly align-items-center flex-wrap">
              <LatestEvents v-for="(event, index) in events" :key="index" :event='event'></LatestEvents>
            </div>

          <div class="d-flex align-items-center justify-content-center mb-3">
                      <button class="btn btn-primary"><router-link :to="{name:'Announcement'}" class="text-light text-decoration-none">Click to see all</router-link></button>
            </div>

          </div>
      </div>
</main>

</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header"
import LatestEvents from '@/components/LatestEvents'
import WOW from "wow.js"
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{
      events: Array,
    }
  },
  components:{Header,LatestEvents},
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

    axios.get('https://api.teachersucenter.com/api/temp/news?latest=3')
        .then(response => {
          this.events = response.data.results;
        })
  },
  
  methods: {
    next() {
        
        let slide = document.getElementById("aa");
        let aa = new bootstrap.Carousel(slide,{
          interval: 2000,
        })
        aa.next()
    },
    prev() {
        
        let slide = document.getElementById("aa");
        let aa = new bootstrap.Carousel(slide,{
          interval: 2000,
        })
        aa.prev()
    }
  },
 
}
</script>
<style scoped>

#homebanner{
  background:url(../assets/img/homebanner.jpeg);
  height: inherit;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: absolute;
  right: 0%;
  z-index: -2;
}

.homebanner-containercs{
  background-image: linear-gradient(
    110deg,
    var(--primary),
    var(--primary) 60%,
    transparent 60%
  );
}

.courses{
  width: 1000px;
}

.stu-img{
  width:600px;
  height: 360px;
  padding: 10px 30px;
}

.rev-con{
  height: 600px;
}
.rev-box{
  width: 900px;
  height: 500px;
  background-color: #fff;
  position: relative;
}
.rev-img{
  width: 130px;
  height: 150px;
  position: absolute;
  bottom: -80px;
}
.next{
  position: absolute;
  right: -40px;
}
.prev{
  position: absolute;
  left: -40px;
}
.BannerTesti{
  padding-left: 100px!important;
}
.mc-img{
  width: 100px;
  height: 100px;
}
.mc-con{
    border-radius: 20px;
}
.mc-box{
  background: #fff;
  padding: 10px;
  border-radius: 20px;
}
.en-img{
   width: 200px;
   height: 120px;
   padding: 5px 10px;
}
.item-hover:hover{
  color: rgb(255, 255, 255);
  background: black;
  border-color: var(--primary);
  transition: 0.5s;
  transform: translateY(-10px);
}
.item-hover2:hover{
  color: #fff!important;
  background: var(--primary);
  transition: 0.5s;
  transform: translateY(-10px);
}

@media only screen and (min-width:979px){
  .item{
    width: 250px;
  }
}
@media only screen and (min-width:1589px){
    .BannerTesti{
      padding-left: 200px!important;
    }
}
@media only screen and (max-width: 484px){
    .courses-text{
      font-size: 2rem;
    }
}
@media only screen and (max-width: 1199px){
    .BannerText{
        font-size: 2rem;
    }
    .BannerTesti{
      padding-left: 10px!important;
    }
}

@media only screen and (min-width: 1117px){
    .courses{
      margin-top: -60px;
      box-shadow: 2px 0px 26px 4px rgba(0,0,0,0.43);
    }
    .hero-banner{
      height: 500px;
    }

}
@media only screen and (max-width: 1111px){
  
    .chItem-con{
      max-width: 1600px;
      overflow-x: scroll;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .chItem-con::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .chItem-con {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    .homebanner-containercs{
      background: var(--primary);
      justify-content: center;
    }
}
@media only screen and (max-width: 652px){
    .stu-img{
      width:350px;
      height: 210px;
    }

    .homebanner-containercs{
      background: var(--primary);
    }
}
</style>