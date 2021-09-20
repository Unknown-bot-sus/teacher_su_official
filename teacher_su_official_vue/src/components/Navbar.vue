<template>
  <header id="home">
    <nav class="navbar navbar-expand-lg navbar-dark flex-column m-0 p-0">
      <div class="container-fluid bg-danger m-0 p-0" id="small-menu">

        <a href="#" class="navbar-brand position-relative">
          <img src="../assets/logo.png" alt="logo" width="70" height="70" class="d-inline-block"/>
          <div class="vertical-line bg-light align-middle"></div>
          <span class="text-light fw-bold h4 mx-2 align-center">Teacher Su Centre</span>
        </a>

        <div class="justify-content-end" id="nav">
          <ul class="navbar-nav">
            <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Teacher Su Students</router-link></li>
            <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Staff</router-link></li>
            <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Alumni</router-link></li>
            <li class="navbar-item">
              <div class="d-flex align-item-center position-relative">
                <div class="vertical-line bg-dark vertical-line1"></div>
                <router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Library</router-link>
                <div class="vertical-line bg-dark vertical-line2"></div>
              </div>
            </li>
            <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">News</router-link></li>
            <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Contacts</router-link></li>
        </ul>

        </div>

      </div>

      <div class="container-fluid bg-dark m-0 p-0" id="mega-menu">

        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" id="nav-button">
          <div class="bg-light line1"></div>
          <div class="bg-light line2"></div>
          <div class="bg-light line3"></div>
        </button>

        <div class="navbar-collapse collapse fw-bold" id="nav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Courses
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>

          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Study with us
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>

          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Career Opportunities
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>

          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Community
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>

          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>


        </div>
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

.vertical-line1{
  height: 30px;
  position: absolute;
  top: 30px;
  right: 50%;
}

.vertical-line2{
  height: 30px;
  position: absolute;
  bottom: 30px;
  right: 50%;
}

.line1, .line2, .line3{
  width: 23px;
  height: 3px;
  margin: 5px;
  transition: all 0.4s;
}

.changes .lines1{
    transform: rotate(-45deg) translate(-5px,6px);
}
.changes .lines2{
    opacity: 0;
}
.changes .lines3{
    transform: rotate(45deg) translate(-5px, -6px);
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

@media only screen and (max-width: 1111px){
  .vertical-line{
    display: none;
  }
}
</style>