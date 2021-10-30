<template>

    <footer class="container-fluid bg-secondary py-3">
        <div class="logo-container">
            <a href="#"><img src="../assets/img/logo.png" alt="logo" width="70" height="70"></a>
            <div class="logo-link-container text-light h2 fw-bold h4 mx-2 my-0">
                <a href="#" class="my-auto">Teacher Su<br/>Centre</a>
            </div>
        </div>
        
    
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
                <span>Phone: <a href="tel:+959422490839" target="_blank">+959422490839</a></span>
                <span>Address: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </span>
                <span>Email: <a href="mailto:example@gmail.com" target="_blank">exmaple&commat;gmail.com</a></span>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center social-media-container text-dark">
              <a href="https://www.facebook.com/Teacher-Su-270139473932097" title="facebook" target="_blank" class="icon-container">
                <i class="fab fa-facebook-f icon"></i>
              </a>
              <a href="https://www.facebook.com/messages/t/270139473932097" title="messenger" target="_blank" class="icon-container">
                <i class="fab fa-facebook-messenger icon"></i>
              </a>
              <a href="mailto:hello@teachersucenter.com" title="gmail" target="_blank" class="icon-container">
                <i class="fal fa-envelope icon"></i>
              </a>
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

<style lang="scss" scoped>
@mixin background-clip($value){
    background-clip: $value;
    -webkit-background-clip: $value;
    -moz-background-clip: $value;
}
.logo-container{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: start;
    align-items: center;

    .logo-link-container{
        position: relative;
        z-index: 0;
        a{
            color: white;
            text-decoration: none;
            position: relative;
            z-index: 0;
            transition: all 0.5s;
        }

    }

    .logo-link-container::before{
        content: '';
        width: 2px;
        height: 100%;

        background-color: white;

        position: absolute;
        top: 0;
        left: -0.5rem;
        z-index: -1;

        transition: all 0.5s;
    }

    .logo-link-container:hover::before{
        left: calc(100% + 0.5rem);
    }

    .logo-link-container:hover a{
        color: var(--primary);
    }
    
}

li, span{
    margin: 1.5rem;
}

.nav-link-container {
    a{
        color: inherit;
        text-decoration: none;
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
    border: 2px solid white;
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

    background-color: red;

    transform: rotate(45deg) translateY(-50%) translate(-100%);
    transform-origin: left top;
    transition: all 0.5s;
}

.icon-container:hover::before{
    animation: icon_ani 0.5s ease-in-out;
    transform: rotate(45deg) translate(0%, -50%);
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