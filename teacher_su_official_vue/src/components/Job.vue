<template>
    <div :class="'row ' + bg">
        <div class="col-12">
            <div :class="'p-3 p-md-5 ' + color">
                <h1 class="fw-bold" v-text="title"></h1>
                <p>{{ description}}</p>
                <ul> Requirements 
                    <li v-for="requirement in deconstructArray(requirements, ', ')" :key="requirement"> {{ requirement }} </li>
                </ul>

                <ul> Responsibilities
                    <li v-for="responsibility in deconstructArray(responsibilities, ', ')" :key="responsibility"> {{ responsibility }} </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Job',  
    props: {
        bg: String,
        color: String,
        title: String,
        description: String,
        requirements: String,
        responsibilities: String,
    },

    methods: {
        deconstructArray(array, deli){
            return array.indexOf(deli) != -1 ? array.split(deli) : [array];
        }
    },
}
</script>

<style scoped>

</style>