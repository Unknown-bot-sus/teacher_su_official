<template>
    <div class="d-flex justify-content-center align-items-center mb-2 enImg-con border border-1">
      <div class="en-img">
        <img :src="`http://api.teachersucenter.com${event.image}`" style="width:100%;height:100%;" alt="">
      </div>
      <div>
        <p class="text-danger text-decoration-underline fw-bold fs-6 m-0">{{ renderTitle(event.title) }}</p>
        <p class="fs-6 fw-bold m-0">Date Posted: {{ getDate() }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name:"Events",
        props: {event: Object},
        methods: {
          renderTitle(listTitle) {
                if(listTitle.length > 50) return listTitle.slice(0,50)+ "...";
                else if (listTitle.length === 0 ) return "no title";
                else return listTitle
            },
            getDate(){
              const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
              let date = new Date(this.event.date_posted)
              return `${date.getUTCDate()} ${months[date.getMonth()+1]} ${date.getUTCFullYear()}`
          }
        },
      }
</script>

<style lang="scss" scoped>
.en-img{
   width: 200px;
   padding: 5px 10px;
}
// @media only screen and (max-width: 406px){
//     .en-img{
//         width: 300px;
//     }
// }
</style>