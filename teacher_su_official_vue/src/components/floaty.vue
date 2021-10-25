<template>
    <div class="animate__animated animate__backInUp">
        <a href="https://www.facebook.com/messages/t/270139473932097" target="_blank"><i class="fab fa-facebook-messenger " style="font-size:2.5rem;"></i></a>
    </div>
</template>

<script>
    export default {
        name:"floaty"
    }
</script>

<style scoped>
    div{
        padding: 10px;
        background: rgb(255, 255, 255);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        position: fixed;
        right: 10px;
        top: 400px;
        box-shadow: -1px 2px 21px 3px rgba(0,0,0,0.28);
    }
    div:hover{
        background-color: rgb(230, 230, 230);
        color: black;
        transition: 0.5s;
    }
</style>