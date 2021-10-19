<template>

    <footer class="container-fluid bg-secondary py-3">
        <div class="logo-container">
            <img src="../assets/img/logo.png" alt="logo" width="70" height="70">
            <div class="vertical-line bg-light align-middle d-inline-block"></div>
            <div class="d-flex flex-column justify-content-start align-items-start text-light h2 fw-bold h4 mx-2 my-0 ">
                <span class="my-auto">Teacher Su</span>
                <span class="my-auto">Centre</span>
            </div>
        </div>
        
    
        <div class="content-container">
            <div class="col-lg-4 col-sm-6 col-12">
                <ul class="text-light list-unstyled">
                    <li><router-link class="text-decoration-none" to="/">Home </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link class="text-decoration-none" to="/courses">Courses </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link class="text-decoration-none" to="/studyWithUs">Study with us </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link class="text-decoration-none" to="/career">Career Opprotunities </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link class="text-decoration-none" to="#">Community </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link class="text-decoration-none" to="/about">About </router-link><i class="fas fa-chevron-right"></i></li>
                </ul>
            </div>

            <div class="col-lg-4 col-sm-6 col-12 d-flex flex-column align-items-start justify-content-space-between text-light">
                <span>Phone: <a href="tel:+959422490839" target="_blank">+959422490839</a></span>
                <span>Address: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </span>
                <span>Email: <a href="mailto:example@gmail.com" target="_blank">exmaple&commat;gmail.com</a></span>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center social-media-container">
              <a href="https://www.facebook.com/Teacher-Su-270139473932097" title="facebook" target="_blank"><i class="fab fa-facebook-square"></i></a>
              <a href="https://www.facebook.com/messages/t/270139473932097" title="messenger" target="_blank"><i class="fab fa-facebook-messenger"></i></a>
              <a href="mailto:hello@teachersucenter.com" title="gmail" target="_blank" ><i class="fal fa-envelope"></i></a>
            </div>

        </div>
        <div class="footer">
            <span class="text-light">&COPY; Copyright 2021 Teacher Su Centre. All right reserved.</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",    
}
</script>

<style scoped>
.logo-container{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: start;
    align-items: center;
}

.vertical-line{
    width: 1px;
    height: 100%;
}

li, span{
    margin: 1.5rem;
}

.content-container a, .content-container a:visited{
    color: inherit;
    cursor: pointer;
}

.fab,.fal{
    font-size: 3rem;
    margin: 1rem;
    color: var(--light);
}

@media only screen and (max-width: 652px){
    .logo-container img{
        width: 50px;
        height: 50px;
    }

    .logo-container span,
    .content-container span{
        font-size: 0.8rem;
    }

    .content-container ul li{
        font-size: 0.7rem;
    }

    .footer span{
        font-size: 0.5rem;
    }
}
</style>