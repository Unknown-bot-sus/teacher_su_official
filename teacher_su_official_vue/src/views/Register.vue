<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Register</h5>
            </div>
        </div>

        <div class="row d-flex align-items-center justify-content-center mt-5">
            <div class="col-12 col-md-6">
                <Header title="How to apply" class="text-center courses-text mb-4"></Header>
            </div>
        </div>

        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-12 col-md-6 my-3 my-md-5 img-thumbnail">
                <img src="../assets/img/register1.png" style="width:100%;" alt="">
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-12 col-md-6 my-3 my-md-5 img-thumbnail">
                <img src="../assets/img/register.png" style="width:100%;" alt="">
            </div>
        </div>

         <div class="row my-5">
            
            <div class="col-12 d-flex align-items-center flex-column justify-content-evenly">
                <Header title="Apply now!" class="text-center"></Header>
                <a href="https://www.facebook.com/messages/t/270139473932097" target="_blank"><i class="fab fa-facebook-messenger" style="font-size:3rem;"></i></a>
            </div>
        </div>

        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-10">
                 <Header class="text-center mb-5 courses-text" title="New terms start date"></Header>
                 <div class="form-group my-5">
                     <input type="text" class="form-control" placeholder="Search a class" v-model="search"/><i></i>
                 </div>
                <table class="table table-responsive table-bordered tables">
                    <thead>
                        <tr>
                            <th @click="sort_title()" class="text-center">Class name</th>
                            <th @click="sort_date()" class="text-center">Term start date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course, index) in filter_class" :key="index">
                            <td><router-link to="#" class="bg-transparent text-decoration-none p-0 p-md-5">{{course.title}}</router-link></td>
                            <td><router-link to="#" class="bg-transparent text-decoration-none p-0 p-md-5">
                                <time :datetime="course.date"> {{ renderDate(course.date) }}</time>
                                </router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Form from "../components/Form.vue"
import axios from 'axios'
export default {
    name:"Register",
    components: {
        Header,Form
    },

    data(){
        return{
            data: [],
            months: ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'],
            order_title: true,
            order_date: true,
            search: '',
        }
    },
    computed:{
        filter_class(){
            return this.data.filter((course)=> 
                course.title.toLowerCase().includes(this.search.toLowerCase()) || 
                course.date.toLowerCase().includes(this.search.toLowerCase()) ||
                this.renderDate(course.date).toLowerCase().includes(this.search.toLowerCase())
                );
        }
    },
    methods:{
        renderDate(date){
            if(typeof date === 'string'){
                let year, month, day; 
                [year, month, day] = date.split('-');
                month = this.months[+month - 1];
                return `${day} ${month}, ${year}`;
            }
            return date;
        },

        sort_title(){
            this.data.sort((first, second)=>(first.title > second.title) ? 1 : -1);
            if(!this.order_title) this.data.reverse();
            this.order_title = !this.order_title;
        },

        sort_date(){
            this.data.sort((first, second)=>{
                return +first.date.replace(/-/g, '') - +second.date.replace(/-/g, '');
            });
            if(!this.order_date) this.data.reverse();
            this.order_date = !this.order_date;
        },
    },

    created() {
        let data = [];
        let date = new Date();
        date = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1 < 10 ? '0' + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1}-${date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate()}`;
        axios.get('https://api.teachersucenter.com/api/verify/works')
            .then(response=>{
                this.data = response.data.filter(course=>{
                    return +course.date_from.replace(/-/g, '') > (+date.replace(/-/g, '') - 10)
                })
            })
            .then(()=>{
                this.data = this.data.map((course)=>{
                    return {
                        title: course.name,
                        date: course.date_from
                    }
                })
            })
    }
}
</script>

<style lang="scss" scoped>
thead tr{
    cursor: pointer;
}

.tables thead td{
    background-color: var(--light);
    color: var(--danger);
}

.tables tbody td{
    background-color: var(--light);
}

.tables tbody td:hover{
    background-color: grey;
    color: var(--red);
}
@media only screen and (max-width: 484px){
        .courses-text{
        font-size: 1.5rem;
        }
}
</style>