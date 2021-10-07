<template>
    <div class="container-fluid p-3">
        <div class="row">
            <div class="col-12 my-md-5">
                <Header title="Merit-based scholarship " class="text-center courses-text"></Header>
                <p class="text-center px-md-5 mx-md-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vel quos pariatur minus dolorum, rem eum dolor cum iure! Aut repudiandae voluptas reprehenderit consequatur ad cumque at qui unde corrupti? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione perferendis tenetur illum. Eaque, quisquam voluptas perspiciatis vitae saepe dignissimos fugit? Tempore veniam optio ad inventore quisquam, dolorum officia ratione! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolores voluptatum, qui molestiae ullam dolorem nam quidem nostrum exercitationem ea fugit, dolore consectetur labore obcaecati ut illo veritatis beatae corrupti?</p>
            </div>
                <Header class="text-center mb-4 courses-text" title="Students who got merit-based scholarship"></Header>

            <div class="col-12 d-flex align-items-center justify-content-center p-0 my-md-5">
                <div class="col-12">
            <div id="bb" class="carousel slide" style="position:relative;" data-bs-ride="carousel">
                  
                  <div class="carousel-indicators" style="position:absolute;bottom:-10px;">
                    <button type="button" data-bs-target="#bb" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#bb" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#bb" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  
                   <div class="carousel-inner">

                      <div class="carousel-item p-5 active bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center mc-con">
                            <div class="mc-box d-flex align-items-center justify-content-evenly flex-column p-3">
                              <div class="mc-img">
                                <img src="../assets/img/man.jpg" style="width:100%;height:100%;border-radius:50%;" alt="">
                              </div>
                              <div class="mc-text d-flex align-items-center justify-content-evenly flex-column text-center">
                                <h3>James</h3>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>                   
                              </div>
                              
                               
                              
                            </div>
                          </div>
                      </div>
                      <div class="carousel-item p-5 bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center mc-con">
                            <div class="mc-box d-flex align-items-center justify-content-evenly flex-column p-3">
                              <div class="mc-img">
                                <img src="../assets/img/man.jpg" style="width:100%;height:100%;border-radius:50%;" alt="">
                              </div>
                              <div class="mc-text d-flex align-items-center justify-content-evenly flex-column text-center">
                                <h3>James</h3>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>                   
                              </div>
                              
                               
                              
                            </div>
                          </div>
                      </div>
                      <div class="carousel-item p-5 bg-primary">
                          <div class="col-12 d-flex align-items-center justify-content-center mc-con">
                            <div class="mc-box d-flex align-items-center justify-content-evenly flex-column p-3">
                              <div class="mc-img">
                                <img src="../assets/img/man.jpg" style="width:100%;height:100%;border-radius:50%;" alt="">
                              </div>
                              <div class="mc-text d-flex align-items-center justify-content-evenly flex-column text-center">
                                 <h3>James</h3>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>
                                    <p class="m-0">Reading : 1</p>                   
                              </div>
                              
                               
                              
                            </div>
                          </div>
                      </div>

                      
                   </div>
            </div>
        </div>
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