<template>
  <div class="app">
    <Navbar></Navbar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
  export default {
    name:"App",
    components :{Navbar}
  }
</script>

<style lang="scss">
    $primary:#103B7B;
    $danger:#BD2222;
    $secondary:#363636;
    $light:#FFFFFF;
    $dark:#000000;
    @import "~bootstrap/scss/bootstrap";
    .active{
      background: #000;
    }
</style>