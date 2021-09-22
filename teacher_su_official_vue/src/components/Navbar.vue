<template>
  <header id="home">
    <nav id="nav-barcs">
      <div class="navbar navbar-expand navbar-dark d-flex align-items-center justify-content-between bg-danger m-0 px-3 py-0" id="small-menu" role="navigation">

        <a href="#" class="navbar-brand position-relative d-flex">
          <img src="../assets/img/logo.png" alt="logo" width="70" height="70" class="d-inline-block"/>
          <div class="vertical-line bg-light align-middle"></div>
          <div class="d-flex flex-column justify-content-start align-items-start text-light fw-bold h4 mx-2 my-0 ">
            <span class="my-auto">Teacher Su</span>
            <span class="my-auto">Centre</span>
          </div>
        </a>


        <ul class="navbar-nav">
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Teacher Su Students</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Staff</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Alumni</router-link></li>
          <li class="navbar-item">
            <div class="d-flex align-item-center position-relative">
              <div class="vertical-line bg-dark vertical-line1"></div>
              <a href="http://library.teachersucenter.com" class="nav-link text-light bg-transparent mx-2 menuitemcs">Library</a>
              <div class="vertical-line bg-dark vertical-line2"></div>
            </div>
          </li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">News</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Contacts</router-link></li>
        </ul>

      </div>

      <div class="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-0" id="mega-menu" role="navigation">

        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" id="nav-button">
          <div class="bg-light line1"></div>
          <div class="bg-light line2"></div>
          <div class="bg-light line3"></div>
        </button>

        <div class="navbar-collapse collapse fw-bold" id="nav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" :to="{name:'Courses'}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Courses
              </router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>

          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" :to="{name:'Study'}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Study with us
              </router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>

          <ul class="navbar-nav m-auto d-wrap">
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" :to="{name:'Career'}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Career Opportunities
              </router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>

          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" :to="{name:'Home'}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Community
              </router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>
          </ul>

          <ul class="navbar-nav m-auto">
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" :to="{name:'About'}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </router-link>
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

  if(getScrollY >= 100) $('#nav-barcs').addClass('fixed-top');
  else $('#nav-barcs').removeClass('fixed-top');
});

</script>
<style lang="scss" scoped>
#nav-barcs.fixed-top{
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

@media only screen and (max-width: 652px){
  #small-menu span{
    font-size: 1.2rem;
    margin: auto 0;
  }

  #small-menu .navbar-nav{
    margin: auto 0;
  }

  #small-menu .navbar-nav li{
    margin: auto 0px;
    padding: 0;
    font-size: 1rem;
  }

  #small-menu .navbar-nav .navbar-item:nth-of-type(2){
    display: gone;
  }

  #small-menu .navbar-nav .navbar-item router-link:nth-of-type(2){
    display: gone;
  }
}
</style>