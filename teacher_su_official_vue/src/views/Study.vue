<template>
    <div class="contianer-fluid">
         <div class="row ">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Study with us</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="banner-img">
                    <div class="banner d-flex align-items-center justify-content-start p-md-5">
                        <div class="banner-card p-3  wow animate__fadeInRight">
                            <Header class="text-light  banner-text" title="Study at Teacher Su Centre"></Header>
                            <div class="d-flex align-items-center justify-content-start ">
                                <router-link to="/register" class="btn btn-danger"> How to apply</router-link>
                                <router-link to="/register" class="btn btn-outline-danger ms-3"> New Class</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row my-5 mb-5">
            <div class="col-12">
                <Header title="Study tool and software" class="text-center courses-text wow animate__fadeInUp"></Header>
                <div class="chItem-con my-3">

                    <div class="d-flex align-items-center justify-content-left justify-content-lg-evenly flex-lg-wrap mt-5 chItem" >
                
                        <router-link class="text-decoration-none" to="/help">
                            <div style="min-width:300px;" class="bg-primary text-light d-flex align-items-center justify-content-center flex-column p-3 mx-1 item-hover wow animate__fadeInUp">
                            <i class="fs-1 fas fa-video"  style="border:2px solid white;border-radius:50%;padding:20px 17px;"></i>
                            <h3 class="fw-bold  mt-2">Zoom guide</h3>
                        </div>
                        </router-link>

                        <router-link class="text-decoration-none" to="/help">
                            <div style="min-width:300px;" class="bg-danger text-light d-flex align-items-center justify-content-center flex-column p-3 mx-1 item-hover wow animate__fadeInUp">
                            <i class="fs-1 fas fa-file-powerpoint"  style="border:2px solid white;border-radius:50%;padding:20px 25px;"></i>
                            <h3 class="fw-bold  mt-2">Powerpoint</h3>
                        </div>
                        </router-link>

                        <router-link class="text-decoration-none" to="/help">
                            <div style="min-width:300px;" class="bg-secondary text-light d-flex align-items-center justify-content-center flex-column p-3 mx-1 item-hover wow animate__fadeInUp">
                            <i class="fs-1 fas fa-photo-video"  style="border:2px solid white;border-radius:50%;padding:20px 15px;"></i>
                            <h3 class="fw-bold  mt-2">Video editing</h3>
                        </div>
                        </router-link>

                </div>

                </div>
            </div>
        </div>
        <div class="row my-5 mb-5 bg-primary">
                <div class="col-12 py-5 text-light">
                    <Header title="Study support and resourses" class="text-center courses-text wow animate__fadeInUp"></Header>
                    <div class="chItem-con">

                        <div class="d-flex align-items-center justify-content-left justify-content-lg-evenly flex-lg-wrap mt-2 mt-sm-5 chItem" >
                    
                            <a href="mailto:hello@teachersucenter.com" target="_blank" class="text-light text-decoration-none"> 
                                <div style="min-width:300px;" class="border border-2 border-light d-flex align-items-center justify-content-center p-3 mx-1 item-hover wow animate__fadeInUp">
                                <i class="fs-1 fas fa-headset"  style="border:2px solid white;border-radius:50%;padding:20px 20px;"></i>
                                <h3 class="fw-bold ms-3 mt-2">IT support</h3>
                            </div>
                            </a>

                            <a href="http://library.teachersucenter.com/" target="_blank" class="text-light text-decoration-none">
                                <div style="min-width:300px;" class="border border-2 border-light d-flex align-items-center justify-content-center p-3 mx-1 item-hover wow animate__fadeInUp">
                                <i class="fs-1 fas fa-book-open"  style="border:2px solid white;border-radius:50%;padding:20px 20px;"></i>
                                <h3 class="fw-bold ms-3 mt-2">Library</h3>
                            </div>

                            </a>
                    </div>

                    </div>
                </div>
        </div>

        <div class="row my-5 d-flex align-items-center justify-content-center">
            <Header title="Extra-curricular activites" class="text-center courses-text mb-5 wow animate__fadeInUp"></Header>
            <div class="col-12 col-sm-7 px-4 px-md-5">
                <div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>

                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="../assets/img/image29.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/img/image32.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/img/image33.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/img/image34.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/img/image42.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/img/image46.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/img/image47.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev fs-1 fw-bolder" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next fs-1 fw-bolder" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import WOW from "wow.js"

    export default {
        name:'Study',
        components:{Header},
        data() {
            return {
                dir: 0,
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
        methods: {
            getleft(){
                return document.querySelector('.left');
            },
            getright(){
                return document.querySelector('.right');
            },
            getcontainer(){
                return document.querySelector('.containercs');
            }
        },
    }
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }

    .banner{
        background-color: rgba(148, 148, 148, 0.459);
        height: 40vh;
        min-height: 30vh;
    }
    .banner-img{
        background-image: url(../assets/img/Study11.png);
        background-size:cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    
    .s-btn:focus{
        background: var(--danger);
        color: white;
    }

    .item-hover:hover{
        transition: 0.5s;
        transform: translateY(15px);
    }

    @media only screen and (min-width: 757px){
        .banner-text{
            font-size: 4rem;
        }
    }
    @media only screen and (min-width: 682px){
        .banner-card{
            width: 600px;
            margin-left: 100px!important;
        }
    }
    @media only screen and (max-width: 427px){
        .banner-text{
            font-weight: normal;
            font-size: 2.6rem;
        }
    }
    @media only screen and (max-width: 484px){
        .courses-text{
        font-size: 2rem;
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
}
    @media only screen and (max-width: 502px){
        .s-btn{
            font-size: 1rem!important;
        }
    }
</style>