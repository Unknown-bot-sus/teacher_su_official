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
                            <Header class="Banner-text text-light" title="Choose your favourite course"></Header>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row flex-column justify-content-center align-items-center mx-3 mt-5 my-md-5 py-0 px-0">
            <div class="d-flex justify-content-start my-0 mx-0 p-0">
                <button id="free" class="btn course-btn active" @click="rendercourse(data[0])">Free classes</button>
                <button id="ylearner" class="btn course-btn" @click="rendercourse(data[1])">Young learners</button>
                <button id="ielts" class="btn course-btn" @click="rendercourse(data[2])">IELTS</button>
                <button id="others" class="btn course-btn" @click="rendercourse(data[3])">Others</button>
            </div>

            <div class="d-flex justify-content-center flex-wrap align-items-center py-sm-4 py-0 px-0 courses-container">
                <Course v-for="(course, index) in min_courses" :key="index" :title="course.title" :description="course.description" link="#"></Course>
                <div class="row col-12 justify-content-center align-items-center mt-5">
                    <button class="btn view-btn" v-show="viewbtn_shown" @click="renderall()">View All</button>
                </div>
            </div>
        </div>

        <div class="row mt-5 my-md-5">
            <Header title="Meet one of our students" class="text-center Banner-text p-0"></Header>
            <div class="col-12 d-lg-flex align-items-center justify-content-center p-3 p-md-5">
                <div class="col-12 col-lg-7 d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap p-3 ">
                    <div>
                        <img src="../assets/img/man.jpg" class="rev-img mb-2" alt="">
                        <div>
                            <p class="fw-bold text-center m-0">Thiha Swan Htet</p>
                            <p class="text-muted text-center m-2">IELTS student</p>
                        </div>
                    </div>
                    <div class="ms-md-5">
                        <p>
                            ‘of the printing and typesetting Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos ‘
                        </p>
                        <p>
                            ‘of the printing and typesetting Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos ‘
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-5 d-flex align-items-center justify-content-center">
            <Header title="Your study experience" class="text-center Banner-text p-0"></Header>
            <div class="col-8 p-0">
                

                <div class="row my-5">
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark">
                            <img src="../assets/img/Study.jpg" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">How to apply</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark">
                            <img src="../assets/img/Study.jpg" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">Find your scholarship</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark">
                            <img src="../assets/img/Study.jpg" class="st-img" alt="">
                            <p class="m-0 mx-4  fw-bold">Pathways</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark">
                            <img src="../assets/img/Study.jpg" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">Career opportunities</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

        <div class="row">
            
            <div class="col-12">
                <h1 style="font-size: 3.1rem, font-family: 'Roboto Slab', serif" class="text-center">Want to study at <span class="text-danger fw-bold">Teacher Su</span>?</h1>
                <Header title="Enroll now!" class="text-center"></Header>
                <Form text_label="Comment" class="my-5"></Form>
            </div>
        </div>

    </div>
</template>

<script>
import Header from "../components/Header"
import Form from "../components/Form"
import Course from '../components/Course'

export default {
    name:'Courses',
    components:{Header,Form,Header,Course},
    data(){
        return{
            data: [],
            min_courses: [],
            all_courses: [],
            viewbtn_shown: true,
        }
    },

    methods:{
        get_mincourse(array, max_index=4){
            try{
                return array.slice(0, max_index);
            } catch {
                return this.get_mincourse(array, --max_index);
            }
        },

        rendercourse(array){
            this.all_courses = array;
            this.min_courses = this.get_mincourse(this.all_courses);
            if(this.all_courses.length <= 4){
                this.viewbtn_shown = false;
            } else {
                this.viewbtn_shown = true;
            }
        },

        renderall(){
            this.min_courses = this.all_courses;
            this.viewbtn_shown = false;
        }

    },

    created(){
        this.data = [
            [
                {
                    title: "Grammar for starters",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ],

            [
                {
                    title: "Starters",
                    description: "Pre A1 Starters is the first of three Cambridge English Qualifications designed for young learners. These tests introduce children to everyday written and spoken English and are an excellent way for them to gain confidence and improve their English."
                },
                {
                    title: "Movers",
                    description: "A1 Movers is the second of three Cambridge English Qualifications designed for young learners. These tests introduce children to everyday written and spoken English and are an excellent way for them to gain confidence and improve their English."
                },
                {
                    title: "Flyers",
                    description: "A2 Flyers is the third of three Cambridge English Qualifications designed for young learners. These tests introduce children to everyday written and spoken English and are an excellent way for them to gain confidence and improve their English."
                },
                {
                    title: "KET",
                    description:   `An A2 Key qualification is proof of your ability to use English to communicate in simple situations.
The exam tests all four English language skills – reading, writing, listening and speaking. It should give you the confidence to go on and study for higher-level exams such as  B1 Preliminary and B2 First.`
                },
                {
                    title: "PET",
                    description: `A B1 Preliminary qualification shows that you have mastered the basics of English and now have practical language skills for everyday use.
This exam is the logical step in your language learning journey between A2 Key and B2 First.`
                },
            ],

            [
                {
                    title: "IELTS",
                    description: ` IELTS (International English Language Testing System)
Educational institutions, employers, professional registration bodies and government immigration agencies often require proof of English language skills as part of their recruitment or admission procedures. IELTS is widely accepted for these purposes.
IELTS is designed to test the language ability of people who want to study or work where English is used as the language of communication. Over 3.5 million tests are taken each year.`
                },    
            ],

            [
                {
                    title: "Dulingo",
                    description: `The Duolingo English Test is a modern language proficiency tool designed for today's international students and institutions. It offers an English proficiency score, video interview, and writing sample in an accessible, efficient, and secure testing experience.`
                },
                {
                   title: "Speak English Professionally & English Grammar (Intermediate)",
                   description: `A B1 Preliminary qualification shows that you have mastered the basics of English and now have practical language skills for everyday use.
This exam is the logical step in your language learning journey between A2 Key and B2 First.` 
                }
            ]
        ];
    }
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

.courses-container{
    border: 1px solid var(--dark);
}
.course-btn{
    width: 10rem;
    border: 1px solid var(--dark);
    border-radius: 0;

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
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
.st-img{
    width: 200px;
    height: 120px;
}
.st-con{
    min-width: 300px;
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
        height: 70px;
    }

    .courses-container{
        padding-top: 0;
    }
}
</style>