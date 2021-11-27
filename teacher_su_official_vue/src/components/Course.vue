<template>
    <div class="card" style="width: 16.5rem; height: 15rem" data-tilt>
        <div class="card-body">
            <h5 class="card-title text-truncate" :class="theme">{{ title }}</h5>
            <p class="card-text">{{ getDescription }}</p>
            
            <router-link :to="link" class="btn" :class="theme">
                Read More <i class="fad fa-chevron-right "></i>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header'
import VanillaTilt from 'vanilla-tilt'
export default {
    name: 'Course',
    components: {Header},
    props: {
        title: String,
        description: String,
        link: Object,
        theme: String,
    },
    computed: {
        getDescription(){
            return this.description.length > 100 ? this.description.slice(0,100) + "..." : this.description;
        }
    },

    mounted() {
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 25,
            speed: 400,
            scale: 1.15,
        });
    }
}
</script>
<style lang="scss" scoped>
.card{
    border: none;
    border-radius: 15px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;

    .card-body{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
}
.line{
    width: 90%;
    height: 1px;
    margin: 1rem 0;
    background-color: var(--dark);
}

.link{
    align-self: flex-end;
}

.free{
    color: var(--lightgreen);
}


.ylearner{
    color: var(--danger);
}

.ielts{
    color: var(--primary);
}

.others{
    color: skyblue;
}

@media only screen and (max-width: 652px){
    .course-container{
        margin-top: 0;
    }
}
</style>