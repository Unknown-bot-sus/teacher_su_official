<template>
    <div :class="'row ' + bg">
        <div class="col-12">
            <div :class="'p-3 p-md-5 ' + color">
                <h1 class="fw-bold" v-text="job_title"></h1>
                <p>‘{{ description}}‘</p>
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
        job_title: String,
        description: String
    }  
}
</script>

<style scoped>

</style>