<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Register</h5>
            </div>
        </div>

        <div class="row d-flex align-items-center justify-content-center my-5">
            <div class="col-12 col-md-6">
                <Header title="How to apply" class="text-center courses-text mb-4"></Header>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, voluptas perferendis ea tenetur est esse voluptatum, aliquam eveniet earum dicta cupiditate commodi. Eligendi ab repellendus perferendis, eaque alias architecto sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis eum molestiae, placeat architecto, mollitia quis quod, enim dicta eos aperiam repellat ex optio. Laudantium hic dolore nobis suscipit aut!
                </p>
            </div>
        </div>

         <div class="row">
            
            <div class="col-12">
                <Header title="Apply now!" class="text-center"></Header>
                <Form text_label="Comment" class="my-5"></Form>
            </div>
        </div>

        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-10">
                 <Header class="text-center mb-5" title="New terms start date"></Header>
                 <div class="form-group my-5">
                     <input type="text" class="form-control" placeholder="Search a class" v-model="search"/><i></i>
                 </div>
                <table class="table table-responsive table-bordered table-success tables">
                    <thead>
                        <tr>
                            <td @click="sort_title()" class="text-center">Class name</td>
                            <td @click="sort_date()" class="text-center">Term start date</td>
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
            this.renderDate(course.date).toLowerCase().includes(this.search.toLowerCase()));
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
                this.sorter_date(first.date.split('-'), second.date.split('-'));
            });
            if(!this.order_date) this.data.reverse();
            this.order_date = !this.order_date;
        },
        
        
        sorter_date(array, array2, index=0){
            if(index >= array.length) return 1;
            return (+array[index] > +array2[index] ? 1 :
                    +array[index] < +array2[index] ? -1 :
                    this.sorter_date(array, array2, ++index));
        }
    },

    created(){
        this.data = [
            {
                title: "Starters 11",
                date: "2021-06-19",
            },
            {
                title: "Starters 12",
                date: "2020-06-19"
            },
            {
                title: "Starters 13",
                date: "2020-05-19"
            },
            {
                title: "Starters 14",
                date: "2021-12-19"
            },
            {
                title: "Starters 15",
                date: "2021-06-18"
            },
            {
                title: "Starters 16",
                date: "2021-06-16"
            },
            {
                title: "Movers 11",
                date: "2021-06-13"
            },{
                title: "KET 11",
                date: "2021-08-19"
            },{
                title: "PET 11",
                date: "2028-06-19"
            },{
                title: "IELTS reading",
                date: "2019-03-19"
            },{
                title: "Starters 35",
                date: "2021-04-19"
            },{
                title: "Flyers 11",
                date: "2021-05-19"
            },{
                title: "Flyers 12",
                date: "2021-03-19"
            },{
                title: "Flyers 13",
                date: "2021-03-19"
            },{
                title: "Flyers 13",
                date: "2021-04-19"
            },
        ]
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