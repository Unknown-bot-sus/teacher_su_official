<template>
    <div id="btn-primary" class="btn-icon">
    </div>

    <div class="btns show">
        <div class="btn-icon"><i class="fab fa-viber"></i></div>

        <div class="btn-icon"><i class="fab fa-facebook-messenger"></i></div>

        <div class="btn-icon"><i class="fab fa-telegram"></i></div>
    </div>
</template>

<script>
export default {
    naem: 'ContactFab'
}
</script>

<style scoped>
.btn-icon{
    width: 5rem;
    height: 5rem;
    background-color: var(--light);
    color: var(--light);
    font-size: 1.5rem;
    border-radius: 100%;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    position: fixed;
    bottom: 50%;
    right: -2.5rem;

    transition: all 0.3s;

    z-index: 100;
}

.btn-icon:nth-of-type(1){
    background-color: blueviolet;
    transform: translate(-4rem, -4rem);
}

.btn-icon:nth-of-type(2){
    color: linear-gradient(
        -110deg,
        red,
        blue
    );

    transform: translate(-6rem, 0rem);
}
</style>