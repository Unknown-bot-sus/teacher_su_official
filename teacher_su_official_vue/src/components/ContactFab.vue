<template>
    

    <div class="btns-fab">
        <a class="btn-icon" href="#" target="_blank"><i class="fab fa-viber"></i></a>

        <a class="btn-icon" href="#" target="_blank"><i class="fab fa-facebook-messenger"></i></a>

        <a class="btn-icon" href="#" target="_blank"><i class="fab fa-telegram"></i></a>
    </div>

    <div id="btn-primary" class="btn-icon" @click="popup"><i class="fad fa-chevron-left"></i></div>
</template>

<script>
export default {
    name: 'ContactFab',
    
    methods: {
        popup(){
            const btn_container = document.querySelector('.btns-fab');
            btn_container.classList.toggle('show');
        },
    },
}
</script>

<style scoped>
.btn-icon{
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    color: transparent;
    font-size: 1.5rem;
    border-radius: 100%;
    box-shadow: 0 3px 10px rgba(0,0,0,0.5);
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    position: fixed;
    bottom: 50%;
    transform: translateY(50%);
    right: -2.5rem;

    transition: all 0.3s;

    z-index: 1;
}

a.btn-icon, a.btn-icon:visited{
    text-decoration: none;
}

.btns-fab.show .btn-icon:nth-of-type(1){
    color: blueviolet;
    transform: translate(-4rem, -4rem);
}

.btns-fab.show .btn-icon:nth-of-type(2){
    background: linear-gradient(
        45deg,
        #0066ff 30%,
        #de0b2e 70%
    );

    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;

    color: transparent;

    transform: translate(-7rem, 3rem);
}

#btn-primary.btn-icon{
    color: black;
    display: flex;
    justify-content: start;
}
.btns-fab.show .btn-icon:nth-of-type(3){
    color: #0bde98;

    transform: translate(-4rem, 10rem);
}

.fab{
    font-size: 3rem;
}

.btns-fab.show + #btn-primary{
    width: 15rem;
    height: 20rem;
    right: -7.5rem;
    background-color: transparent;
}

#btn-primary{
    background-color: var(--light);
    z-index: 2;
}
</style>