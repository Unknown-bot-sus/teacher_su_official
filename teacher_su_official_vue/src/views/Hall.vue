<template>
  <div class="container-fluid">

      <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Hall of fame</h5>
            </div>
        </div>

      <div class="row my-3">
            <h1 class="header text-center py-5"><span class="text-danger">Teacher Su</span>'s Hall of fame</h1>
        </div>

      <div class="row">
        <div class="col-12">
        
              <div class="wrapper">
                  <div class="d-flex align-items-center justify-content-left">
                      <div class="single-box" v-for="person in data" :key="person.index" data-tilt>
                          <div class="up-area">
                            <div class="up-img">
                                <img :src="person.img" style="width:100%;height:100%;border-radius:50%;border:5px solid black;" alt="">
                            </div>
                            <div class="up-text">
                              <p style="padding:0 5px;border-radius:20px;background:black;color:white;display:inline;">{{ person.name }}</p>
                              <p style="border-bottom:3px solid black;padding:0 5px;">{{ person.title }}</p>
                            </div>
                          </div>
                          <div class="p-2 text-center my-2 fs-1 fw-bolder shadow overall">
                              overall {{ person.overall }}
                          </div>
                          <div class="bottom-area">
                            
                            <div>
                              <ul style="list-style-type:none;padding:0;">
                                <li>speaking {{ person.speaking }}</li>
                                <li>listening {{ person.listening }}</li>
                                <li>writing {{ person.writing }}</li>
                                <li>reading {{ person.reading }}</li>
                              </ul>
                            </div>
                          </div>
                      </div>
                  </div>
                  
        </div>

            <div class="d-flex align-items-center justify-content-center mb-3">
                      <button class="btn btn-primary"><router-link :to="{name:'Hallielts'}" class="text-light text-decoration-none">Click to see all</router-link></button>
            </div>

        </div>
      </div>


  </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
  export default {
    name:"Hall",
    data() {
      return {
        data: []
      }
    },
    mounted() {
        VanillaTilt.init(document.querySelectorAll(".single-box"), {
            max: 25,
            speed: 400,
            scale: 1,
        });
    },
    created () {
      this.data = [
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:7
            },
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:7
            },
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:7
            },
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:7
            },
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:7
            },
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:7
            },
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:7
            },
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:7
            },
            { 
                name:"a person",
                title: 'ielts br nyr',
                speaking:1,
                listening:2,
                writing:3,
                reading:4,
                img:"../assets/img/bmo.jpeg",
                overall:3
            },
           
        ];
    },
  }
</script>

<style lang="scss" scoped>
  .single-box{
  min-width: 320px;
  border-radius: 15px;
  background: white;
  padding: 20px 10px;
  margin:30px 60px;
  box-shadow: 1px 2px 36px 14px rgba(0,0,0,0.16);
  transform-style: preserve-3d;
  transform: perspective(1000px);
}
.single-box:hover{
  box-shadow: 1px 2px 36px 14px rgba(58, 105, 206, 0.16);
}
.overall{
  transform: translateZ(30px);
}
.up-area{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.up-text>p{
  margin: 0%;
}
.up-img{
  width: 100px;
  height: 100px;
}
.bottom-area{
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper:hover{
    animation-play-state: paused;
}
 .wrapper{
      width: 100%;
      margin: 10px auto;
      padding: 20px 10px;
      animation: scroll 35s linear infinite;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .wrapper::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .wrapper {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
 
@keyframes scroll {
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(calc(-250px * 9));
    }
}

@media only screen and (max-width: 484px){
    .courses-text{
      font-size: 2rem;
    }
}
</style>