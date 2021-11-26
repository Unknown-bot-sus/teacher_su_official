<template>
  <div class="app">
    <Navbar/>
    <router-view></router-view>
    <Fab/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import floaty from "./components/floaty.vue"
import Fab from '@/components/Fab.vue'
import { defineAsyncComponent } from '@vue/runtime-core';
  export default {
    name:"App",
    components :{Navbar,
    Footer: defineAsyncComponent(()=>
      import('./components/Footer.vue')),
    Fab},
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