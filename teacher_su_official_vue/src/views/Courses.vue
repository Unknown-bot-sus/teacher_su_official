<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Courses</h5>
            </div>
        </div>

        <div class="row">
            <div class="col-12 p-0">
                <div class="Banner-img">
                    <div class="Banner d-flex align-items-center justify-content-center p-md-5">
                        <div class="p-5">
                            <Header class="Banner-text text-light wow animate__fadeInUp" title="Choose your favourite course"></Header>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row flex-column justify-content-center align-items-center mx-3 mt-5 my-md-5 py-0 px-0">
            <div class="d-flex justify-content-start my-0 mx-0 p-0">
                <button v-for="(button, index) in buttons" :key="button" :id="button"
                        class="btn course-btn" :class="{active: act_course === button}"
                        @click="chgActCourse(button)">
                        {{ renderButtonname(index) }}
                </button>
            </div>

            <div class="d-flex justify-content-around flex-wrap align-items-center mt-4 py-sm-4 py-0 px-0" id="courses-container">
                    <Course v-for="(course, index) in rendercourse" :key="index" 
                    :title="course.name" :description="course.description" 
                    :link="{name:'coursedetail',params:{id:course.id}}" :theme="act_course">
                    </Course>
 
                <div class="row col-12 justify-content-center align-items-center mt-5">
                    <button class="btn view-btn" 
                            v-show="!rendered_all" 
                            @click="rendered_all=true">
                            View All
                    </button>
                </div>
            </div>
        </div>

        <div class="row mt-5 my-md-5">
            <Header title="Meet one of our students" class="text-center Banner-text p-0 wow animate__fadeInUp"></Header>
            <div class="col-12 d-lg-flex align-items-center justify-content-center p-3 p-md-5">
                <div class="col-12 col-lg-7 d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap p-3 wow animate__backInLeft">
                    <div>
                        <img src="../assets/img/kst.jpg" class="rev-img mb-2" alt="">
                        <div>
                            <p class="fw-bold text-center m-0">Kyi Shin Thant</p>
                            <p class="text-muted text-center m-2">IELTS student</p>
                        </div>
                    </div>
                    <div class="ms-md-5">
                        <p style="text-indent:3rem;">
                            The classes are not only informative but also fun to learn. Looking back the time I was a student at the centre, I could experience a great organized study environment and learning system. 
                        </p>
                        <p style="text-indent:3rem;">
                            This is really good practice for professional life in general. On top of that, open discussions for speaking practices played a role in not only preparing for the test but also improving communication skills.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-5 d-flex align-items-center justify-content-center">
            <Header title="Your study experience" class="text-center Banner-text p-0 wow animate__fadeInUp"></Header>
            <div class="col-9 p-0">
                

                <div class="row my-5">
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <router-link :to="{name:'Register'}">
                            <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark item-hover wow animate__fadeInUp">
                            <img src="../assets/img/Study4.png" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">How to apply</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <router-link :to="{name:'Study'}">
                            <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark item-hover wow animate__fadeInUp">
                            <img src="../assets/img/Study3.png" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">Find your scholarship</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <router-link :to="{name:'pathway'}">
                            <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark item-hover wow animate__fadeInUp">
                            <img src="../assets/img/Study6.png" class="st-img" alt="">
                            <p class="m-0 mx-4  fw-bold">Pathways</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <router-link :to="{name:'Career'}">
                            <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark item-hover wow animate__fadeInUp">
                            <img src="../assets/img/Study5.png" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">Career opportunities</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                        </router-link>
                    </div>
                   
                </div>
            </div>
        </div>

        <div class="row mb-5">
            
            <div class="col-12 wow animate__fadeInUp d-flex align-items-center justify-content-evenly flex-column">
                <h1 style="font-size: 3.1rem, font-family: 'Roboto Slab', serif" class="text-center">Want to study at <span class="text-danger fw-bold">Teacher Su</span>?</h1>
                <Header title="Enroll now!" class="text-center"></Header>
                <a href="https://www.facebook.com/messages/t/270139473932097"><i class="fab fa-facebook-messenger" style="font-size:3rem;"></i></a>
            </div>
        </div>

    </div>
</template>

<script>
import Header from "../components/Header"
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import Course from '../components/Course'
import WOW from "wow.js"
import axios from "axios"

export default {
    name:'Courses',
    components:{Header,Header,Course},
    data(){
        return{
            data: {
                'free': [],
                'ylearner': [],
                'ielts': [],
                'others': []
            },
            rendered_all: Boolean,
            buttons: ['free', 'ylearner', 'ielts', 'others'],
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

    this.fetchData("https://api.teachersucenter.com/api/temp/category")
    this.chgActCourse('free');
    this.isRenderedAll();
    },
    computed: {
        ...mapState({
            act_course: state => state.act_course,
        }),

        rendercourse(){
            let chosen_course = this.data[this.act_course]
            if(this.rendered_all){
                return this.get_courses(chosen_course, chosen_course.length);
            }
            return this.get_courses(chosen_course);
        },
    },
    watch: {
        act_course(afterChange, beforeChange) {
            this.isRenderedAll();
        }
    },

    methods:{
        fetchData(link){
            axios.get(link)
                .then(response=>{
                    this.catergorying_courses(response.data.results);
                    if(response.data.next != null) this.fetchData(response.data.next);
                })
        },
        catergorying_courses(array){
              for (let course of array){
                if(this.isContained(course.name, ['Free'])){
                    this.data['free'].push(course);
                } else if(this.isContained(course.name,['Starters', 'Movers', 'Flyers', 'KET', 'FCE', 'PET', 'CAE', 'CPE'])){
                    this.data['ylearner'].push(course);
                } else if(this.isContained(course.name, ['ielts'])){
                    this.data['ielts'].push(course)
                } else {
                    this.data['others'].push(course)
                }
            }
        },
        isContained(title, array){
            let contained = false;
            for(let el of array){
                if(title.toLowerCase().includes(el.toLowerCase())){
                    contained = true;
                    break;
                }
            }
            return contained;
        },
        
        ...mapMutations([
            'chgActCourse',
        ]),
        
        get_courses(array, max_index=4){
            try{
                return array.slice(0, max_index);
            } catch {
                return this.get_courses(array, --max_index);
            }
        },

        isRenderedAll(){
            if(this.data[this.act_course].length <= 4){
                this.rendered_all = true;
            } else {
                this.rendered_all = false;
            }
        },

        renderButtonname(index){
            switch(this.buttons[index]){
                case 'free':
                    return 'Free classes';
                case 'ylearner':
                    return 'Young learners';
                case 'ielts':
                    return 'IELTS';
                case 'all':
                    return 'All';
                default:
                    return 'Others';
            }
        },
    },
}

</script>

<style scoped>
.Banner-img{
    background-image: url(https://images.unsplash.com/photo-1501349800519-48093d60bde0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.Banner{
    background-color: rgba(74, 75, 75, 0.466);
    height: 20vh;
    min-height: 30vh;
}

.course-btn{
    width: 10rem;
    border: 1px solid var(--dark);
    border-radius: 0;
    font-size: 1rem;

    transition: font-weight 0s;
    margin: 0;
}

.view-btn{
    width: 10rem;
    padding: 5px 2rem;
    border: 1px solid var(--danger);
    color: var(--danger);
    text-transform: uppercase;
}

.course-btn:hover{
    font-weight: 900;
}

#free.course-btn:hover{
    border-color: var(--lightgreen);
    color: var(--lightgreen);
}

#ylearner.course-btn:hover{
    border-color: var(--danger);
    color: var(--danger);
}

#ielts.course-btn:hover{
    border-color: var(--primary);
    color: var(--primary);
}

#others.course-btn:hover{
    border-color: skyblue;
    color: skyblue;
}

.course-btn:focus{
    box-shadow: none;
}

#free.active.course-btn{
    background-color: var(--lightgreen);
    color: var(--light);
}

#ylearner.active.course-btn{
    background-color: var(--danger);
    color: var(--light);
}

#ielts.active.course-btn{
    background-color: var(--primary);
    color: var(--light);
}

#others.active.course-btn{
    background-color: skyblue;
    color: var(--light);
}

.Banner-text{
    padding: 10px;
}

.rev-img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.st-img{
    width: 200px;
    height: 130px;
}

.st-con{
    min-width: 300px;
}

.item-hover:hover{
    color: white;
    background: var(--primary);
    transition: 0.5s;
    transform: translateY(-15px);
}

@media only screen and (max-width: 400px){
    .Banner-text{
        font-weight: normal;
        font-size: 1.5rem;
    }
}

@media only screen and (max-width: 629px){
    .st-img{
        width: 140px;
        height: 90px;
    }

    .courses-container{
        padding-top: 0;
    }

    .course-btn{
        font-size: 10px;
    }
}
</style>