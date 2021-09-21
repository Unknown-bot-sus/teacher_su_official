<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Courses</h5>
            </div>
        </div>

        <div class="row">
            <div class="col-12 p-0">
                <div class="Banner-img">
                    <div class="Banner d-flex align-items-center justify-content-center p-md-5">
                        <div class="p-5">
                            <Header class="Banner-text text-light" title="Choose your favourite course"></Header>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5 my-md-5">
            <Header title="Meet one of our students" class="text-center Banner-text p-0"></Header>
            <div class="col-12 d-lg-flex align-items-center justify-content-center p-5">
                <div class="col-12 col-lg-7 d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap p-3 ">
                    <div>
                        <img src="../assets/man.jpg" class="rev-img mb-2" alt="">
                        <div>
                            <p class="fw-bold text-center m-0">Thiha Swan Htet</p>
                            <p class="text-muted text-center m-2">IELTS student</p>
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

        <div class="row mb-5 d-flex align-items-center justify-content-center">
            <Header title="Your study experience" class="text-center Banner-text p-0"></Header>
            <div class="col-8 p-0">
                

                <div class="row my-5">
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark">
                            <img src="../assets/Study.jpg" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">How to apply</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark">
                            <img src="../assets/Study.jpg" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">Find your scholarship</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark">
                            <img src="../assets/Study.jpg" class="st-img" alt="">
                            <p class="m-0 mx-4  fw-bold">Pathways</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-5 d-flex align-item-center justify-content-center">
                        <div class="st-con d-flex align-items-center justify-content-between border border-1 border-dark">
                            <img src="../assets/Study.jpg" class="st-img" alt="">
                            <p class="m-0 ms-3  fw-bold">Career opportunities</p>
                            <i class="fas fa-chevron-circle-right mx-2 text-danger"></i>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <h1 style="font-size: 3.1rem, font-family: 'Roboto Slab', serif" class="text-center">Want to study at <span class="text-danger fw-bold">Teacher Su</span>?</h1>
                <Header title="Enroll now!" class="text-center"></Header>
                <Form text_label="Comment"></Form>
            </div>
        </div>

        

    </div>
</template>

<script>
import Header from "../components/Header"
import Form from "../components/Form"

export default {
    name:'Courses',
    components:{
        Header,
        Form,
        Header,
        }
}
</script>

<style scoped>
    .Banner-img{
        background-image: url(https://images.unsplash.com/photo-1501349800519-48093d60bde0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
    .Banner{
        background-color: rgba(74, 75, 75, 0.466);
        height: 20vh;
        min-height: 30vh;
    }
    .Banner-text{
        padding: 10px;
    }
    .rev-img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    .st-img{
        width: 200px;
        height: 120px;
    }
    .st-con{
        min-width: 300px;
    }
    @media only screen and (max-width: 400px){
    .Banner-text{
        font-weight: normal;
        font-size: 1.5rem;
    }
    }
    @media only screen and (max-width: 629px){
        .st-img{
            width: 140px;
            height: 70px;
        }
    }
</style>