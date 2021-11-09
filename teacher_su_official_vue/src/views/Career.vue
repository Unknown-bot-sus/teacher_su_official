<template>
    <div class="container-fluid mx-auto">
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
                            <Header class="banner-text text-light" title="Join our team"></Header>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-5">
            <h1 class="header text-center py-5">Employing <span class="text-danger">Teacher Su</span>'s graduate and students</h1>
        </div>
        
        <Job v-for="(job, index) in data" :key=index 
        :bg="color_var[0][index % 2]" :color="color_var[1][index % 2]" 
        v-bind="job" :id="job.title"></Job>
    </div>

    
</template>

<script>
import Header from "../components/Header.vue"
import Job from '../components/Job'
export default {
    name:'Career',
    data(){
        return{
            data: [],
            color_var: []
        }
    },

    components:{
        Header, 
        Job,
    },

    created(){

        // Data will be replaced with data from api
        this.data = [
            {
                title: 'Main Teacher',
                description: 'The main teacher is the decision-maker for the whole class and leads assistant lecturers. An MT should be able to teach young learners and reaches them with engaging lesson plans.',
                requirements: 'Bachelor’s degree in teaching or relevant field, In-depth knowledge of teaching methodologies and practices, Good communication and organizational skills, Cool-tempered and positive attitude, Strong leadership skill, Familiar with online teaching tools (preferable)',
                responsibilities: 'Prepare effective lesson plans, tests and assignments, Assign date and time for the tests, Grade homework, assignments and tests, Choose award-worthy students, Decide and prove if each student is qualified for the next level, Manage assistants lecturers and give appropriate instructions, Check the daily/monthly reports from the assistant lecturers, Check class information on the internal staff management platform',
            },
            {
                title: 'Assistant Lecturer',
                description: 'The assistant lecturer supports the main teacher in presenting lessons and helps students learn effectively. The duties of an assistant lecturer can be varied on the age of students.',
                requirements: 'Be a former student at the Teacher Su Language Centre, Sufficient qualification in English, Good communication and organizational skills, Cool-tempered and positive attitude, Familiar with online teaching tools (preferable), A college degree is not mandatory',
                responsibilities: 'Help the main teacher plan and upload tests, Track students attendance and class schedules, Work with smaller groups to enhance the learning process and give attention to the progress of individuals, Upload daily lessons and necessary announcements on google classroom, Organize test marks and prepare daily/monthly reports for consultation, Call students if they are not taking the test'
            },
            {
                title: 'Graphic Designer',
                description: 'The graphic designer creates eye-catching visual texts and posters for social media posts, advertisements and announcements of the centre.',
                requirements: 'Knowledge of design techniques,  principles and professional tools, Strong interest in design thinking, Creativity and originality, Proper understanding of the commercial environment, Ability to work with little supervision, Good communication and teamwork, Professional Portfolio (preferable)',
                responsibilities: 'Create designs in accordance with brand guidelines, Professional approach to time, costs and deadlines, Stay on top of the latest trends, Clearly articulate ideas and suggestions, Collaborate closely with the content writers'
            },
            {
                title: 'Content Writer',
                description: 'A content writer creates print or digital content for the centre that provides information and showcases the classes and services it offers.  The content writer should be able to write proficiently in both Burmese and English.',
                requirements: 'Knowledge of writing techniques, principles and tools, An impeccable grasp of both Burmese and English, along with  idioms and current trends, Creativity and originality, Proper understanding of the commercial environment, Ability to work with little supervision, Good communication and teamwork, Professional Portfolio (preferable)',
                responsibilities: 'Produce well-researched and grammatically correct content in both languages, Professional approach to time, costs and deadlines, Stay on top of the latest trends, Clearly articulate ideas and suggestions, Collaborate closely with the graphic designers'
            },
            {
                title: 'Other Positions',
                description: 'We have other positions: class coordinators, student service, human resource management, developers for the Tech team, just to name a few. If you have solid skills in something and are interested in working at the Teacher Su Language Centre, feel free to reach out via hello@teachersucenter.com along with your curriculum vitae.',
                requirements: 'Varied according to the position',
                responsibilities: 'Varied according to the position'
            }
        ];

        this.color_var = [
            ['bg-primary', 'bg-light'],
            ['text-light', 'text-dark']
        ]
    }
}
</script>

<style scoped>
.job-container:nth-of-type(even){
    background-color: var(--primary);
    color: var(--dark);
}

.job-container:nth-of-type(odd){
    background-color: var(--primary);
    color: var(--light);
}

   .banner{
        background-color: rgba(148, 148, 148, 0.459);
        height: 35vh;
        min-height: 30vh;
    }
    .banner-img{
        background-image: url(../assets/img/Study10.png);
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
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