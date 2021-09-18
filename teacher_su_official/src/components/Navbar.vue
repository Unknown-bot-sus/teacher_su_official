<template>
  <header id="home">
    <nav class="navbar navbar-expand-lg py-0">
      <div class="bg-danger container-fluid">
        <a href="#" class="navbar-brand">
          <img src="../assets/logo.png" alt="logo" width="70" height="70" class="d-inline-block"/>
          <span class="text-light fw-bold h4 mx-2 align-center">Teacher Su Centre</span>
        </a>

        <ul class="navbar-nav">
          <li class="navbar-item"><a href="#" class="nav-link m-2 menuitemcs text-light">Teacher Su Students</a></li>
          <li class="navbar-item"><a href="#" class="nav-link m-2 menuitemcs text-light">Staff</a></li>
          <li class="navbar-item"><a href="#" class="nav-link m-2 menuitemcs text-light">Alumni</a></li>
          <li class="navbar-item"><a href="#" class="nav-link m-2 menuitemcs text-light">Library</a></li>
          <li class="navbar-item"><a href="#" class="nav-link m-2 menuitemcs text-light">News</a></li>
          <li class="navbar-item"><a href="#" class="nav-link m-2 menuitemcs text-light">Contacts</a></li>
        </ul>
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
    console.log(getScrollY)

    if(getScrollY >= 100) $(".navbar").addClass('fixed-top');
    else $(".navbar").removeClass('fixed-top');
  });
</script>
<style lang="scss" scoped>
.navbar.fixed-top{
  animation: navani 0.5s linear;
  transition: all 0.5s;
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