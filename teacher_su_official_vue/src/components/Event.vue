<template>
    <div class="card mb-5" :id="event.id">
        <h2 class="card-header">{{ event.title }} <br/> <small class="text-muted">Date Posted: {{ getDate }}</small></h2>
        <div class="card-body clearfix">
            <img :src="`http://api.teachersucenter.com${event.image}`" :alt="event.content+'pic'" class="col-6 col-md- float-md-end">
            <h3 class="card-title h5">{{ event.description }}</h3>
            <p class="card-text">{{ getContent }} <span v-if="!rendered_all" @click="rendered_all=true" role="read_more" type="button">...Read More</span></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Event',
    props: {
        'event': Object,
    },
    data(){
        return {
            rendered_all: false,
        }
    },
    computed: {
        getDate(){
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let date = new Date(this.event.date_posted)
            return `${date.getUTCDate()} ${months[date.getMonth()+1]} ${date.getUTCFullYear()}`
        },

        getContent(){
            console.log('h3434')
            console.log(this.event.content.length)
            if(!this.rendered_all) return this.event.content.length < 300 ? this.event.content : this.event.content.slice(0, 300);
            return this.event.content;
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>

</style>