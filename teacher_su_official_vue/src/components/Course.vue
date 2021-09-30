<template>
    <div class="d-flex flex-column course-container mx-auto">
        <h3 v-text="classname" class="fw-bold h4 titlecs"></h3>
        <span v-text="description" class="description"></span>
        <div class="line"></div>
        <router-link :to="link" class="bg-transparent link">
            Read More <i><i class="fad fa-chevron-right "></i></i>
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
        link: String,
    },
    data(){
        return{
            classname: String,
            classdescription: String
        }
    },
    created(){
        this.classname = this.title;
        if(this.classname.length > 20) this.classname = this.classname.slice(0, 20) + "...";
    }
}
</script>
<style scoped>
.course-container{
    width: 20rem;
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
    color: var(--lightgreen);
    align-self: flex-end;
}

@media only screen and (max-width: 652px){
    .course-container{
        margin-top: 0;
    }
}
</style>