<template>
  <div class="app">
    <ContactFab></ContactFab>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer"
import ContactFab from './components/ContactFab'
  export default {
    name:"App",
    components :{
      Footer,
      ContactFab,
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
.active{
  background: #000;
}
</style>