<template>
   <div class="container">
       <div class="row">
           <div class="col-12 d-flex align-items-center justify-content-start my-3 my-md-5">
               <div>
                   <img :src="'http://api.teachersucenter.com' + lists.image" alt="" class="img-thumbnail" style="width:300px;">
               </div>
           </div>
           <div class="col-12 my-3 my-md-5">
               <div>
                   <h1 class="fs-1 fw-bolder">{{ lists.name }}</h1><p class="fs-5">{{ lists.content }}</p>
               </div>
           </div>
           <div class="col-12 d-flex align-items-center justify-content-start my-3 my-md-5">
               <div>
                   <h1 class="fs-1 fw-bolder">Key facts</h1>
                   <table>
                       <tbody>
                           <tr>
                               <td>CEFR level:</td>
                               <td>{{ lists.cefr_level }}</td>
                           </tr>
                           <tr>
                               <td>Scale score:</td>
                               <td>{{ lists.scale_score }}</td>
                           </tr>
                           <tr>
                               <td>Test format:</td>
                               <td>{{ lists.test_format }}</td>
                           </tr>
                           <tr>
                               <td>No. of papers:</td>
                               <td>{{ lists.paper_count }}</td>
                           </tr>
                           <tr>
                               <td>Exam length:</td>
                               <td>{{ lists.test_length }}</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
           </div>          
       </div>
       <div class="row">
           <div class="my-5">
                <a href="https://www.facebook.com/messages/t/270139473932097" target="_blank" class="btn btn-outline-dark">Apply now</a> <router-link to="/register" class="text-dark mx-2">How to apply ?</router-link>
           </div>
           <p class="text-muted text-end">date posted : {{ lists.date_posted }}</p>
       </div>
    </div> 
</template>

<script>
import axios from "axios"
    export default {
        name:"coursedetail",
        data() {
            return {
                lists: [],
            } 
        },
        mounted(){
            let id = this.$route.params.id;
            axios.get(`http://api.teachersucenter.com/api/temp/category/${id}`)
                .then(response =>{
                    
                    this.lists = response.data
                    console.log(this.lists)
                })
        },
    }
</script>

<style lang="scss" scoped>
    tr,td{
        padding: 10px;
        border: 2px solid black;
    }
</style>