<template>
    <div class="container-fluid">
        
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Hall of fame - IELTS</h5>
            </div>
        </div>

        <div class="row my-3">
            <h1 class="header text-center py-5"><span class="text-danger">Teacher Su</span>'s Hall of fame - IELTS</h1>
        </div>

        <div class="row">
        <div class="col-12">
        
              <div class="wrapper">
                  <div class="d-flex align-items-center justify-content-evenly flex-wrap">
                      <div class="single-box" v-for="person in data" :key="person.index" data-tilt>
                          <div class="up-area">
                            <div class="up-img">
                                <img :src="person.img" style="width:100%;height:100%;border-radius:50%;border:5px solid #103B7B;" alt="">
                            </div>
                            <div class="up-text">
                              <p style="padding:0 5px;border-radius:20px;background:#103B7B;color:white;display:inline;">{{ person.name }}</p>
                              <p style="border-bottom:3px solid #103B7B;padding:0 5px;">{{ person.title }}</p>
                            </div>
                          </div>
                          <div class="p-2 text-center my-2 fs-1 fw-bolder shadow overall" style="color:#103B7B;">
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

            

        </div>
      </div>

    </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'

    export default {
        name:"Hallielts",
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


    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
.header{
        font-size: 3.1rem;
        font-family: 'Roboto Slab', serif;
    }

    @media only screen and (max-width: 816px){
        .header{
        font-size: 2rem;
        }
    }
    @media only screen and (max-width: 532px){
        .header{
        font-size: 1rem;
        }
    }
</style>