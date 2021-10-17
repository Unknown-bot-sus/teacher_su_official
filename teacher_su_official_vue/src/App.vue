<template>
  <div class="app">
    <Navbar @act_course='chgActCourse' />
    <router-view v-model="act_course"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer"
  export default {
    name:"App",
<<<<<<< HEAD
    components :{Navbar,Footer,
=======
    components :{Navbar,Footer,ContactFab,
    },
    data(){
      return{
        act_course: 'free',
      }
    },
    methods: {
      chgActCourse(active){
        console.log(active)
        this.act_course = active;
        console.log(this.act_course)
      }
>>>>>>> a0088affd3d800945c24415e7bc090d8e593c88c
    }
  };
</script>

<style lang="scss">
$primary:#103B7B;
$danger:#BD2222;
$secondary:#363636;
$light:#FFFFFF;
$dark:#000000;

:root{
  --primary: #103B7B;
  --danger: #BD2222;
  --secondary: #363636;
  --light: #FFFFFF;
  --dark: #000000;
  --lightgreen: #0bde98;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');

@import "~bootstrap/scss/bootstrap";

</style>