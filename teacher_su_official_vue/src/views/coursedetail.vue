<template>
   <div class="container">
       <div class="row">
           <div class="col-12 d-flex align-items-center justify-content-start my-3 my-md-5">
               <div>
                   <img src="data:image/jpeg;base64,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" alt="">
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
            axios.get("http://api.teachersucenter.com/api/temp/category/1")
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