<template>
  <div class="app">
    <Navbar></Navbar>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
  export default {
    name:"App",
    components :{Navbar}
  };
</script>

<style lang="scss">
    $primary:#103B7B;
    $danger:#BD2222;
    $secondary:#363636;
    $light:#FFFFFF;
    $dark:#000000;

    :root{
      --primary: $primary;
      --danger: $danger;
      --secondary: $secondary;
      --light: $light;
      --dark: $dark;
    }
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');

    @import "~bootstrap/scss/bootstrap";
    .active{
      background: #000;
    }
</style>