<template>
    <div class="container-fluid p-3">
        <div class="row">
            <div class="col-12 my-md-5">
                <Header title="Merit-based scholarship " class="text-center courses-text"></Header>
                <p class="text-center px-md-5 mx-md-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vel quos pariatur minus dolorum, rem eum dolor cum iure! Aut repudiandae voluptas reprehenderit consequatur ad cumque at qui unde corrupti? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione perferendis tenetur illum. Eaque, quisquam voluptas perspiciatis vitae saepe dignissimos fugit? Tempore veniam optio ad inventore quisquam, dolorum officia ratione! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolores voluptatum, qui molestiae ullam dolorem nam quidem nostrum exercitationem ea fugit, dolore consectetur labore obcaecati ut illo veritatis beatae corrupti?</p>
            </div>
                
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
    export default {
  components: { Header },
        name:"meritBase"
    }
</script>

<style scoped>
.mc-img{
  width: 100px;
  height: 100px;
}
.mc-con{
    border-radius: 20px;
}
.mc-box{
  background: #fff;
  padding: 10px;
  border-radius: 20px;
  width: 300px;
}
@media only screen and (max-width: 597px){
        .courses-text{
        font-size: 1.5rem;
        }
}
</style>