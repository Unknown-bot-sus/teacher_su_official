<template>
            <div class="card my-3 mx-5"  :id="event.id" style="max-width:500px">
                <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center justify-content-center p-1">
                    <img :src="`https://api.teachersucenter.com${event.image}`" class="img-fluid rounded-start cimg" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ event.title }}</h5>
                        <p class="card-text">{{ renderText(event.content,200,"no title") }}</p>
                        <router-link :to="link">Read more</router-link>
                    </div>
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    name: 'Event',
    props: {
        'event': Object,
        'link': String
    },
    data(){
        return {
            rendered_all: false,
        }
    },
    methods: {
        renderText(text, limit , fallback){
        return text.length > limit ? text.slice(0, limit) + "..." : text.length != 0 ? text : fallback;
    }
    }
}
</script>
<style lang="scss" scoped>
    .cimg{
       width: 300px;
   }
</style>