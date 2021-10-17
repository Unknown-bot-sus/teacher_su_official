<template>
    <div class="d-flex flex-column course-container mx-auto">
        <h3 v-text="title" class="fw-bold h4 titlecs text-truncate" :class="theme"></h3>
        <span v-text="classdescription" class="description"></span>
        <div class="line"></div>
        <router-link :to="link" class="bg-transparent link" :class="theme">
            Read More <i class="fad fa-chevron-right "></i>
        </router-link>
    </div>
</template>
<script>
import Header from '../components/Header'
export default {
    name: 'Course',
    components: {Header},
    props: {
        title: String,
        description: String,
        link: Object,
        theme: String,
    },
    data(){
        return{
            classdescription: String
        }
    },
    created(){
        this.classdescription = this.description;
        if(this.classdescription.length > 200) this.classdescription = this.classdescription.slice(0, 200) + " ....";
    }
}
</script>
<style scoped>
.course-container{
    width: 16.5rem;
    border: 1px solid var(--dark);
    padding: 1rem;
    margin-top: 1rem;
    cursor: pointer;
} 

.description{
    display: inline-block;
    margin: 1rem 0;
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