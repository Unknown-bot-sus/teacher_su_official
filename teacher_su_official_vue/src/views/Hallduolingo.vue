<template>
     <div class="container-fluid">
        
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Hall of fame - Duolingo</h5>
            </div>
        </div>

        <div class="row my-3">
            <h1 class="header text-center py-5"><span class="text-danger">Teacher Su</span>'s Hall of fame - Duolingo</h1>
        </div>

        <div class="row my-3">
        
        <div class="col-12 my-2">
              <div class="wrapper">
                  <div class="d-flex align-items-center justify-content-evenly flex-wrap slide-track">
                      <div class="single-box" v-for="person in data" :key="person.index" data-tilt>
                          <div class="up-area">
                            <div class="up-img">
                                <img :src="'http://api.teachersucenter.com' + person.student_image" style="width:100%;height:100%;border-radius:50%;border:5px solid #ffb617;object-fit:cover;" alt="">
                            </div>
                            <div class="up-text">
                              <p style="padding:0 5px;border-radius:20px;background:#ffb617;color:white;display:inline;">{{ person.student_name }}</p>
                              <p style="border-bottom:3px solid #ffb617;padding:0 5px;">{{ person.other_achievement }}</p>
                            </div>
                          </div>
                          <div class="p-2 text-center my-2 fs-1 fw-bolder shadow overall">
                              overall - {{ person.overall }}
                          </div>
                          <div class="bottom-area">
                            
                            <div>
                              <ul style="list-style-type:none;padding:0;">
                                <li>Literacy - {{ person.literacy }}</li>
                                <li>Comprehension - {{ person.comprehension }}</li>
                                <li>Conversation - {{ person.conversation }}</li>
                                <li>Production - {{ person.production }}</li>
                              </ul>
                            </div>
                          </div>
                          <div class="text-muted">
                            Test date - {{ person.test_date }}
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
import axios from 'axios'

    export default {
        name:"Hallduolingo",
        data() {
      return {
        data: []
      }
    },
    methods: {
       getDate(x){
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let date = new Date(x)
            return `${date.getUTCDate()} ${months[date.getMonth()+1]} ${date.getUTCFullYear()}`
        },
        fetchData(link){
                axios.get(link)
                    .then(response=>{
                        this.data.push(...response.data.results);
                        if(response.data.next != null) this.fetchData(response.data.next);
                    }).then(()=>{
                      VanillaTilt.init(document.querySelectorAll(".single-box"), {
                                max: 25,
                                speed: 400,
                                scale: 1,
                    })
                    })
            }
    },
    mounted() {
        this.fetchData("https://api.teachersucenter.com/api/temp/det_students")
    },
  
    }
</script>

<style lang="scss" scoped>
    .single-box{
  max-width: 320px;
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
  flex-wrap: wrap;
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