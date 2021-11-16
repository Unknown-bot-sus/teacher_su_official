<template>
  <div class="logo-container">
        <a href="#" class="img-container mx-2"><img src="../assets/img/logo.png" alt="logo" width="70" height="70"></a>
        <div class="logo-link-container text-light h2 fw-bold h4 mx-2 my-0">
            <a href="#">Teacher Su<br/>Centre</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "LogoContainer",
}
</script>

<style lang="scss">
.logo-container{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .img-container{
        position: relative;
    }

    .img-container::before, .img-container::after{
        content: '';
        width: 20%;
        height: 20%;

        position: absolute;
        transition: all 0.25s;
    }

    .img-container::before{
        top: 0;
        left: 0;
        border-top: 2px solid white;
        border-left: 2px solid white;
    }

    .img-container::after{
        right: 0;
        bottom: 0;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
    }

    .img-container:hover::before, .img-container:hover::after{
        width: 70%;
        height: 70%;
    }

    img{
        transition: all 0.5s;
    }

    img:hover{
        transform: rotate(360deg);
    }

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



@media only screen and (max-width: 652px){
    .logo-container img{
        width: 50px;
        height: 50px;
    }

    .logo-container a{
        font-size: 0.8rem;
    }
}
</style>