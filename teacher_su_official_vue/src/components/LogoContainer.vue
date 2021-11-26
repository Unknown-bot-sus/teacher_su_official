<template>
  <div class="logo-container">
        <a href="#" class="img-container mx-2"><img src="../assets/img/logo.png" alt="logo" width="70" height="70"></a>
        <a class="logo-link-container h2 mx-2 my-0" href="#">
            <span text='Teacher Su'>Teacher Su</span>
            <span text='Centre'>Centre</span>
        </a>
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
        display: flex;
        flex-direction: column;

        text-decoration: none;

        span{
            font-family: sans-serif;
            width: 12rem;
            color: #222;
            letter-spacing: 3px;
            position: relative;
        }

        span::before{
            content: attr(text);
            width: 0%;
            height: 100%;
            color: #fff;
            box-sizing: border-box;

            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;

            border-right: 4px solid #fff;

            transition: all 1.4s;

            overflow: hidden;
        }
    }

    .logo-link-container:hover span::before{
        width: 100%;
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