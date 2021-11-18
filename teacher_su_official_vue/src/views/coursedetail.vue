<template>
   <div class="container">
       <div class="row mt-4">
           <h1 class="fs-1 fw-bolder text-center">{{ lists.name }}</h1>
           <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center my-3 my-md-5">
               <div>
                   <img :src="'http://api.teachersucenter.com' + lists.image" alt="" class="img-thumbnail" style="width:300px;">
               </div>
           </div>
           <div class="col-12 col-lg-6 my-3 my-md-5 d-flex align-items-center">
               <div>
                   <p class="fs-5" style="text-indent:3rem;">{{ lists.content }}</p>
               </div>
           </div>        
       </div>
       <div class="row">
           <h1 class="fs-1 fw-bolder text-center">Key facts</h1>
           <div class="col-12 d-flex align-items-center justify-content-center my-3 my-md-5">
               <div>
                   
                   <table>
                       <tbody>
                           <tr>
                               <td style="width:130px;">CEFR level:</td>
                               <td style="width:190px;">{{ lists.cefr_level }}</td>
                           </tr>
                           <tr>
                               <td style="width:130px;">Scale score:</td>
                               <td style="width:190px;">{{ lists.scale_score }}</td>
                           </tr>
                           <tr>
                               <td style="width:130px;">Test format:</td>
                               <td style="width:190px;">{{ lists.test_format }}</td>
                           </tr>
                           <tr>
                               <td style="width:130px;">No. of papers:</td>
                               <td style="width:190px;">{{ lists.paper_count }}</td>
                           </tr>
                           <tr>
                               <td style="width:130px;">Exam length:</td>
                               <td style="width:190px;">{{ lists.test_length }}</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
           </div>  
       </div>

       <div class="row">
           <div class="my-5 d-flex align-items-center justify-content-center">
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