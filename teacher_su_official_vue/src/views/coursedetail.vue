<template>
<main class="container">
    <h1>{{ course.name }}</h1>

    <div class="row">
        <div class="col-12 col-lg-6 my-3 d-flex justify-content-center align-items-center">
            <img class="img-thumbnail" :src="`https://api.teachersucenter.com/${course.image}`" :alt="course.name">
        </div>
        <div class="col-12 col-lg-6 my-5 d-flex justify-content-center align-items-center">
            <table class="table-respnsive">
                <tbody>
                    <tr>
                        <th >CEFR level:</th>
                        <td>{{ course.cefr_level }}</td>
                    </tr>
                    <tr>
                        <th >Scale score:</th>
                        <td>{{ course.scale_score }}</td>
                    </tr>
                    <tr>
                        <th >Test format:</th>
                        <td>{{ course.test_format }}</td>
                    </tr>
                    <tr>
                        <th >No. of papers:</th>
                        <td>{{ course.paper_count }}</td>
                    </tr>
                    <tr>
                        <th >Exam length:</th>
                        <td>{{ course.test_length }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <p>{{ course.content }}</p>

    <div class="row">
           <div class="my-5 d-flex align-items-center justify-content-around">
                <a href="https://www.facebook.com/messages/t/270139473932097" target="_blank" class="btn btn-outline-dark">Apply now</a> 
                <router-link to="/register" class="text-dark mx-2">How to apply ?</router-link>
           </div>
           <p class="text-muted text-end">date posted : {{ getDate }}</p>
    </div>
</main>
</template>
<script>
import axios from "axios"
    export default {
        name:"coursedetail",
        data() {
            return {
                course: Object,
            }
        },
        mounted(){
            axios.get(`http://api.teachersucenter.com/api/temp/category/${this.$route.params.id}`)
                .then(response =>{
                    this.course = response.data;
                    console.log(new Date(this.course.date_posted).getDate())
                })
        },
        computed: {
            getDate(){
                let date = new Date(this.course.date_posted)
                return `${date.getUTCFullYear()}/${date.getMonth()+1}/${date.getUTCDate()}`
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/bs_mixing';
table{
    position: relative;

    min-width: 20rem;

    // max-width: 30rem;

    @include media-breakpoint-down(sm){
        min-width: 17rem;
    }
}

table::before{
    content: '';
    width: 120%;
    height: 120%;
    background-color: var(--primary);
    border-radius: 15px;

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;

    transform: translate(-50%, -50%);

    @include media-breakpoint-down(sm){
        width: 110%;
        height: 110%;
    }
}

tbody{
    background-color: rgba(0, 0, 0, 0.5);
    tr{
        color: var(--light);
        border-radius: 15px;

        th, td{
            padding: 1rem;
        }
    }

    tr:hover{
        background-color: rgba(255, 255, 255, 0.2);
    }
}

p{
    text-indent: 3rem;
    letter-spacing: 2px;
}
</style>