<template>
    <div>
      <div v-for="event in events" :key="event.id" class="d-flex flex-wrap justify-content-center align-items-center mb-2 enImg-con">
              <div class="en-img">
                <img :src="event.image" style="width:100%;height:100%;" alt="">
              </div>
              <div>
                <p class="text-danger text-decoration-underline fw-bold fs-6 m-0">{{ renderTitle(event.title) }}</p>
                <p class="fs-6 fw-bold m-0">{{ event.time }}</p>
                <router-link :to="{ name: 'Leventdetail', params:  {id:event.id} }"> Read more </router-link>
              </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:"Events",
        methods: {
          renderTitle(listTitle) {
                
                if(listTitle.length > 50) return listTitle.slice(0,50)+ "...";
                else if (listTitle.length === 0 ) return "no title";
                else return listTitle
            }
        },
        data() {
            return {
              events: [
                {
                  id:1,
                  title:"Master of Cybersecurity webinar Cybersecurity webinar Cybersecurity webinar Cybersecurity webinar",
                  time:"Monday 13 September 06:00pm",
                  image:"https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                },
                {
                  id:2,
                  title:"Master of Cybersecurity webinar Cybersecurity webinar Cybersecurity webinar Cybersecurity webinar",
                  time:"Monday 13 September 06:00pm",
                  image:"https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                },
                 {
                  id:3,
                  title:"Master of Cybersecurity webinar Cybersecurity webinar Cybersecurity webinar Cybersecurity webinar",
                  time:"Monday 13 September 06:00pm",
                  image:"https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                }
              ]
              }
          },
      }
</script>

<style lang="scss" scoped>
.en-img{
   width: 200px;
   padding: 5px 10px;
}
@media only screen and (max-width: 406px){
    .en-img{
        width: 300px;
    }
}
</style>