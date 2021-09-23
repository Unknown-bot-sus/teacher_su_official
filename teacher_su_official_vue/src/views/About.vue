<template>
  <div class="container-fluid">
      <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">About us</h5>
            </div>
        </div>

      <div class="row">
            <div class="col-12 p-0">
                <div class="banner-img">
                    <div class="banner d-flex align-items-center justify-content-center p-md-5">
                        
                    </div>
                </div>
            </div>
        </div>

      <div class="row my-5">
            <h2 class="header1 text-center mt-3">About <span class="text-danger">Teacher Su</span> Centre</h2>

        <div class="col-12 d-flex align-items-center justify-content-center p-3 p-md-5">

            <div class="para-about">
              <p> ‘Loem Ipsum is simply dummy text  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos tenetur.’</p>
              <p> ‘Loem Ipsum is simply dummy text  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos tenetur.’</p>
            </div>
        </div>
      </div>

       <div class="row mt-5 my-md-5">
            <h2 class="header1 text-center mt-3">About <span class="text-danger">Teacher Su</span></h2>
            <div class="col-12 d-lg-flex align-items-center justify-content-center p-1 p-md-5">
                <div class="col-12 col-lg-7 d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap p-3 ">
                    <div>
                        <img src="../assets/img/man.jpg" class="rev-img mb-2" alt="">
                        <div>
                            <p class="fw-bold text-center m-0">Su Htet Zaw</p>
                            <p class="text-muted text-center m-2">Founder and CEO</p>
                        </div>
                    </div>
                    <div class="ms-md-5">
                        <p>
                            ‘of the printing and typesetting Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos ‘
                        </p>
                        <p>
                            ‘of the printing and typesetting Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos ‘
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>

      <div class="row my-5">
            <h2 class="header1 text-center mt-3"><span class="text-danger">Teacher Su</span> Centre going Through Covid</h2>

        <div class="col-12 d-flex align-items-center justify-content-center p-3 p-md-5">

            <div class="para-about">
              <p> ‘Loem Ipsum is simply dummy text  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos tenetur.’</p>
              <p> ‘Loem Ipsum is simply dummy text  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perspiciatis earum voluptatibus explicabo. Distinctio vel minima ipsum expedita mollitia vero autem totam! Aliquam obcaecati doloremque maiores nostrum, consectetur dignissimos tenetur.’</p>
            </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-6 p-3 p-lg-5">
          <h1 class="text-center header1 mb-3">Our Vison</h1>
          <div class="para-t">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div class="col-12 col-lg-6 p-3 p-lg-5">
          <h1 class="text-center header1 mb-3">Policy</h1>
          <div class="para-t">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header"
  export default {
    name:"About",
    components:{
      Header
    }
  }
</script>

<style  scoped>

   .banner{
        background-color: rgba(148, 148, 148, 0.459);
        height: 20vh;
    }
    .banner-img{
        background-image: url(https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
      .rev-img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
    .header1{
        font-size: 2.7rem;
        font-family: 'Rock Salt', cursive;
    }

    @media only screen and (max-width: 816px){
        .header1{
        font-size: 2rem;
        }
    }
    @media only screen and (max-width: 532px){
        .header1{
        font-size: 1rem;
        }
    }

    @media only screen and (min-width: 757px){
        .banner-text{
            font-size: 4rem;
        }
        .banner{
            height: 30vh;
        }
    }
    @media only screen and (max-width: 427px){
        .banner-text{
            font-weight: normal;
            font-size: 2.6rem;
        }
    }
    @media only screen and (min-width: 824px){
        .para-about{
          width: 60vw;
        }
        .para-t{
          padding: 0 100px;
        }
    }
</style>