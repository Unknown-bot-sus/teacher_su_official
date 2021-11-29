<template>

    <footer class="container-fluid bg-secondary py-3">
        <LogoContainer></LogoContainer>
    
        <div class="row content-container">
            <div class="col-lg-4 col-sm-6 col-12">
                <ul class="text-light list-unstyled nav-link-container">
                    <li><router-link to="/">Home </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="/courses">Courses </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="/studyWithUs">Study with us </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="/career">Career Opprotunities </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="#">Community </router-link><i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="/about">About </router-link><i class="fas fa-chevron-right"></i></li>
                </ul>
            </div>

            <div class="col-lg-4 col-sm-6 col-12 d-flex flex-column align-items-start justify-content-space-between text-light nav-link-container">
                <span>Phone: <a href="tel:+959422490839" target="_blank">+95 9422490839</a></span>
                <span>Address: 129, Myo Ma Market, Zabuthiri Township, Naypyidaw, Myanmar. 15011 </span>
                <span>Email: <a href="mailto:example@gmail.com" target="_blank">hello&commat;teachersucenter.com</a></span>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center social-media-container text-dark">
              <a href="https://www.facebook.com/Teacher-Su-270139473932097" title="Facebook" target="_blank" class="icon-container" data-bs-toggle="tooltip" data-bs-placement="top">
                <i class="fab fa-facebook-f icon"></i>
              </a>
              <a href="https://www.facebook.com/messages/t/270139473932097" title="Messenger" target="_blank" class="icon-container" data-bs-toggle="tooltip" data-bs-placement="top"> 
                <i class="fab fa-facebook-messenger icon"></i>
              </a>
              <a href="mailto:hello@teachersucenter.com" title="Gmail" target="_blank" class="icon-container" data-bs-toggle="tooltip" data-bs-placement="top">
                <i class="fal fa-envelope icon"></i>
              </a>
            </div>

        </div>
        <div class="footer">
            <span class="text-light">&COPY; Copyright 2021 Teacher Su Centre. All rights reserved.</span>
        </div>
    </footer>
</template>

<script>
import LogoContainer from '../components/LogoContainer.vue'
export default {
    name: "Footer",
    components: {LogoContainer},
    mounted() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });
    }
}
</script>

<style lang="scss" scoped>
li, span{
    margin: 1.5rem;
}

.nav-link-container {
    a{
        color: inherit;
        text-decoration: none;
        transition: all 0.5s;

        
    }

    .fa-chevron-right{
            transition: all 0.5s;
    }

    a:hover{
        text-decoration: underline;
    }

    a:hover + .fa-chevron-right{
        transform: rotate(90deg);
    }
}


.icon-container{
    border: 1px solid white;
    border-radius: 10%;
    margin: 1rem;
    width: 4rem;
    height: 4rem;
    text-decoration: none;
    background: none;
    z-index: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    overflow: hidden;

}

.icon-container::before{
    content: '';
    width: 142%;
    height: 150%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background-color: var(--primary);

    transform: rotate(45deg) translateY(-50%) translate(-100%);
    transform-origin: left top;
    transition: all 0.5s;
}

.icon-container:hover::before{
    animation: icon_ani 0.5s ease-in-out;
    transform: rotate(45deg) translate(0%, -50%);
}

.icon-container:hover{
    border-color: var(--light);
    
    i{
        color: var(--light);
    }
}



@keyframes icon_ani {
    0%{
        transform: rotate(45deg) translate(-100%, -50%);
    }

    33%{
        transform: rotate(45deg) translate(0%, -50%);
    }

    66%{
        transform: rotate(45deg) translate(-30%, -50%);
    }

    100%{
        transform: rotate(45deg) translate(0%, -50%);
    }
}

.icon-container::after{
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;

    background-color: white;
}

.icon{
    font-size: 3rem;
}


@media (max-width:767.98px){
    .content-container span{
        font-size: 0.8rem;
    }

    .content-container ul li{
        font-size: 0.7rem;
    }

    .footer span{
        font-size: 0.5rem;
    }

    .icon-container{
        width: 3rem;
        height: 3rem;
    }

    .icon{
        font-size: 2rem;
    }
}
</style>