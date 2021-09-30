<template>
    <div class="container p-3">
        <div class="row">
            <div class="col-12 my-md-5">
                <Header title="Merit-based scholarship" class="text-center"></Header>
                <p class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vel quos pariatur minus dolorum, rem eum dolor cum iure! Aut repudiandae voluptas reprehenderit consequatur ad cumque at qui unde corrupti? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione perferendis tenetur illum. Eaque, quisquam voluptas perspiciatis vitae saepe dignissimos fugit? Tempore veniam optio ad inventore quisquam, dolorum officia ratione! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolores voluptatum, qui molestiae ullam dolorem nam quidem nostrum exercitationem ea fugit, dolore consectetur labore obcaecati ut illo veritatis beatae corrupti?</p>
            </div>
            <div class="col-12 my-md-5">
                <Header class="text-center mb-5" title="Students who got merit-based scholarship"></Header>
                <div class="d-flex align-items-center justify-content-center">
                    <div style="width:290px;">
                        <img src="../assets/img/man.jpg" style="width:100%;height:100%;" alt="">
                    </div>
                    <div class="bg-danger p-3 text-light">
                        <p>Reading: 9</p>
                        <p>Listening: 9</p>
                        <p>Writing: 7</p>
                        <p>Speaking: 6.5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
    export default {
  components: { Header },
        name:"meritBase"
    }
</script>

<style scoped>

</style>