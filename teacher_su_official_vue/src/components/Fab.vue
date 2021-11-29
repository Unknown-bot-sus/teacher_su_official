<template>
    <div class="menu-opener" @click="visible">
        <i class="fas fa-chevron-left"></i>
    </div>

    <div class="bg-blur" v-if="active"></div>

    <nav class="menu" v-if="active">
        <div class="menu-closer" @click="invisible($event)">
            <i class="fas fa-plus"></i>
        </div>
        <div v-for="(contact, index) in contacts" :key="index" class="link-container" type="button"
        :style="`--index: ${index}; --length: ${contacts.length}; --nlength: ${-contacts.length}`"
        data-bs-toggle="tooltip" data-bs-placement="top" :title="contact.app">
            <a :href="contact.link" target="_blank" class="nav-link">
                <i :class="contact.icon"></i>
            </a>
        </div>
    </nav>
</template>
<script>
export default {
    name: "Fab",
    data() {
        return {
            active: false,
            interval: 0,
            del_time_out: null,
            contacts: [
                {
                    link: 'https://www.facebook.com/Teacher-Su-270139473932097',
                    icon: 'fab fa-facebook-f',
                    app: 'Facebok'
                },
                {
                    link: 'https://www.facebook.com/messages/t/270139473932097',
                    icon: 'fab fa-facebook-messenger',
                    app: 'Messenger'
                },
                {
                    link: 'tel:+959422490839',
                    icon: 'fas fa-phone',
                    app: 'Call'
                },
                {
                    link: '#',
                    icon: 'fab fa-linkedin-in',
                    app: 'Linedin'
                },
            ]
        }
    },
    methods: {
        visible() {
            this.active = true;
        },

        invisible(e) {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('active');
            let target = e.target.firstElementChild;
            target = target == null ? e.target : target;
            if(target.classList.contains('triggered')) {
                this.del_time_out = setTimeout(() => {
                    this.active = false;
                }, 1240)
            } else {
                if (this.del_time_out) {
                    clearTimeout(this.del_time_out);
                }

                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl)
                });
            }
            target.classList.toggle('triggered');
        }
    },
}
</script>
<style lang="scss" scoped>
.menu-opener{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: #fff;
    padding-left: 5px;

    text-align: start;
    line-height: 2rem;

    position: fixed;
    top: 50%;
    right: 0;

    transform: translate(50%);

    animation: start 0.5s linear;

    cursor: pointer;
}

.menu{
    width: 50%;
    height: 50%;

    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translate(-50%, -50%);

    .menu-closer{
        width: 3.5rem;
        height: 3.5rem;
        font-size: 2rem;
        border-radius: 50%;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        z-index: 2;

        transition: all 1.25s;

        cursor: pointer;
    }

    .link-container{
        width: 3.2rem;
        height: 3.2rem;
        font-size: 1.7rem;
        border-radius: 50%;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        
        position: absolute;

        transition: all 0.5s;

        transition-delay: calc(0.1s * var(--index));

        cursor: pointer;
    }

    a{
        transform: rotate(calc(360deg / var(--nlength) * var(--index)));
    }
}

.menu.active{

    .menu-closer{
        transform: rotate(315deg);
        color: red;
    }

    .link-container{
        transform: rotate(calc(360deg / var(--length) * var(--index))) translate(-100px);
    }

    .link-container:hover{
        transform: rotate(calc(360deg / var(--length) * var(--index))) translate(-100px) scale(1.2);
        transition: all 0.2s;

        a{
            color: var(--danger);
        }
    }
}

.bg-blur{
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.5);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}


@keyframes start {
    0%{
        transform: translate(100%);
    }

    50%{
        transform: translate(0%);
    }

    100%{
        transform: translate(50%);
    }
}
</style>