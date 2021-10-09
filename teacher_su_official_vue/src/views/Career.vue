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
        :job_title="job.title" :description="job.description"></Job>
        
        <br>
    <br>
    <br>
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
                title: 'Main teacher',
                description: 'of the printing and typesetting Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos '
            },
            {
                title: 'Assistant teacher',
                description: 'of the printing and typesetting Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos '
            },
            {
                title: 'Tech team',
                description: 'of the printing and typesetting Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos '
            },
            {
                title: 'Designer',
                description: 'of the printing and typesetting Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos '
            },
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
        height: 30vh;
        min-height: 30vh;
    }
    .banner-img{
        background-image: url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
        background-size: cover;
        background-position: center;
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