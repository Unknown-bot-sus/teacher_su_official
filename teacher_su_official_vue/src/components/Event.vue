<template>
    <div class="card mb-5" :id="event.id">
        <h2 class="card-header">{{ event.title }} <br/> <small class="text-muted">Date Posted: {{ getDate }}</small></h2>
        <div class="card-body clearfix">
            <img :src="`http://api.teachersucenter.com${event.image}`" :alt="event.content+'pic'" class="col-12 col-md-6 float-md-end">
            <h3 class="card-title">{{ event.description }}</h3>
            <p class="card-text">{{ event.content }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Event',
    props: {
        'event': Object,
    },
    computed: {
        getDate(){
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let date = new Date(this.event.date_posted)
            return `${date.getUTCDate()} ${months[date.getMonth()+1]} ${date.getUTCFullYear()}`
        }
    }
}
</script>
<style lang="scss" scoped>

</style>