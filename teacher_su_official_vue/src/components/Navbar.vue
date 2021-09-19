<template>
  <header id="home">
    <nav class="navbar navbar-expand-lg py-0">
      <div class="container-fluid bg-danger m-0 p-0" id="small-menu">
        <a href="#" class="navbar-brand position-relative">
          <img src="../assets/logo.png" alt="logo" width="70" height="70" class="d-inline-block"/>
          <div class="vertical-line bg-light align-middle"></div>
          <span class="text-light fw-bold h4 mx-2 align-center">Teacher Su Centre</span>
        </a>

        <ul class="navbar-nav">
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 text-light menuitemcs">Teacher Su Students</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 text-light menuitemcs">Staff</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 text-light menuitemcs">Alumni</router-link></li>
          <li class="navbar-item">
            <div class="d-flex align-item-center position-relative">
              <div class="vertical-line bg-dark line1"></div>
              <router-link to="#" class="nav-link bg-transparent mx-2 text-light menuitemcs">Library</router-link>
              <div class="vertical-line bg-dark line2"></div>
            </div>
          </li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 text-light menuitemcs">News</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 text-light menuitemcs">Contacts</router-link></li>
        </ul>
      </div>

      <div class="container-fluid bg-dark m-0 p-0" id="mega-menu">

      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name:"Navbar",

  };

  import jQuery from "jquery";
  const $ = jQuery;
  window.$ = $;

  $(window).scroll(function(){
    let getScrollY = $(this).scrollTop();

    if(getScrollY >= 100) $(".navbar").addClass('fixed-top');
    else $(".navbar").removeClass('fixed-top');
  });
</script>
<style lang="scss" scoped>
.navbar.fixed-top{
  animation: navani 0.5s linear;
  transition: all 0.5s;
}

.vertical-line{
  display: inline-block;
  width: 1px;
  height: 70px;
}

.line1{
  height: 30px;
  position: absolute;
  top: 30px;
  right: 50%;
}

.line2{
  height: 30px;
  position: absolute;
  bottom: 30px;
  right: 50%;
}

@keyframes navani{
  from{
    transform: translateY(-100px);
    opacity: 0;
  }

  to{
    transform: translateY(0);
    opacity: 1;
  }
}
</style>