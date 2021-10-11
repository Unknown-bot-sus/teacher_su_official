<template>
  <header id="home">
    <nav id="nav-barcs">
      <div class="navbar navbar-expand navbar-dark d-flex align-items-center justify-content-between bg-danger m-0 px-3 py-0" id="small-menu" role="navigation">
        <a href="#" class="navbar-brand position-relative d-flex">
          <img src="../assets/img/logo.png" alt="logo" width="70" height="70" class="d-inline-block"/>
          <div class="vertical-line bg-light align-middle"></div>
          <div class="d-flex flex-column justify-content-start align-items-start text-light fw-bold mx-2 my-0 ">
            <span class="my-auto">Teacher Su</span>
            <span class="my-auto">Centre</span>
          </div>
        </a>

        <ul class="navbar-nav">
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Teacher Su Students</router-link></li>
          <li class="navbar-item"><a href="http://simp.teachersucenter.com/login" class="nav-link bg-transparent mx-2 menuitemcs">Staff</a></li>
          <li class="navbar-item"><a href="#" class="nav-link bg-transparent mx-2 menuitemcs">Alumni</a></li>
          <li class="navbar-item">
            <div class="d-flex align-item-center position-relative">
              <div class="vertical-line bg-dark vertical-line1"></div>
              <a href="http://library.teachersucenter.com" class="nav-link text-light bg-transparent mx-2 menuitemcs">Library</a>
              <div class="vertical-line bg-dark vertical-line2"></div>
            </div>
          </li>
          <li class="navbar-item"><router-link :to="{name:'Announcement'}" class="nav-link bg-transparent mx-2 menuitemcs">News</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Contacts</router-link></li>
        </ul>
      </div>





    <div class="navbar navbar-expand navbar-dark bg-dark m-0 p-0" id="mega-menu" role="navigation">
      <input type="radio" name="slider" id="menu-btn" class="tgbtn" hidden>
      <input type="radio" name="slider" id="close-btn" class="tgbtn" hidden>

      <ul class="navbar-nav navbar-dark d-flex flex-column flex-md-row justify-content-around align-items-center container-fluid  bg-dark">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>

        <li class="navbar-item">
          <a href="#" class="desktop-item nav-link" id="courses">Courses<i class="fas fa-chevron-down m-3"></i></a>
          <input type="checkbox" id="showMega" class="tgbtn" hidden>
          <label for="showMega" class="mobile-item">Courses</label>
            <div class="row d-flex justify-content-around mega-box m-0">
                <div class="col-12 col-md-4 d-flex flex-column justify-content-around align-items-center m-0 px-4">
                  <div class="input-group search-container">
                    <input type="text" id="search-bar" class="form-control" placeholder="Search for a course"/>
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-secondary bg-transparent" type="button"><i class="fad fa-search text-light px-1"></i></button>
                    </div>
                  </div>
                  <router-link :to="{name: 'Courses'}" class="nav-link text-center">View all courses</router-link>
                </div>

                <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center m-0 p-1">
                  <h3 class="text-light">Browse all courses</h3>
                  <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                      <ul class="mega-links list-unstyled mx-3">
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Free classes</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Young learners</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Research Writing Course</router-link></li>
                      </ul>
                      <ul class="mega-links list-unstyled mx-3">
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">IELTS</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Duolingo</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Speak English Professionally &amp; <br/>English Grammar</router-link></li>
                      </ul>
                  </div>

                  <div class="form-group d-flex flex-column flex-sm-row justify-content-around align-items-center">
                    <router-link to="#" class="form-control btns mx-3">How to apply</router-link>
                    <router-link to="#" class="form-control btns mx-3">How to apply scholarship</router-link>
                  </div>
                </div>

                <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center m-0 p-1">
                  <h3 class="text-light">Contact Us</h3>
                  <ul class="mega-links list-unstyled">
                    <li class="m-3"><span class="text-light">Phone no:09999</span></li>
                    <li class="m-3"><span class="text-light">Address: blah blah blah</span></li>
                  </ul>
                  <div class="d-flex my-3">
                    <a  href="#" target="_blank" class="d-block mx-2"><i class="fab fa-viber btn-icon"></i></a>

                    <a href="#" target="_blank" class="d-block mx-2"><i class="fab fa-facebook-messenger btn-icon"></i></a>

                    <a href="#" target="_blank" class="d-block mx-2"><i class="fab fa-telegram btn-icon"></i></a>
                  </div>
                </div>
            </div>
      </li>

        <li class="navbar-item">
          <a href="#" class="desktop-item nav-link" id="study">Study with us<i class="fas fa-chevron-down m-3"></i></a>
          <input type="checkbox" id="showMega" class="tgbtn" hidden>
          <label for="showMega" class="mobile-item">Courses</label>
          <div class="mega-box">
          </div>
        </li>
        <li class="navbar-item">
          <a href="#" class="desktop-item nav-link" id="career">Career Opportunities<i class="fas fa-chevron-down m-3"></i></a>
          <input type="checkbox" id="showMega" class="tgbtn" hidden>
          <label for="showMega" class="mobile-item">Courses</label>
          <div class="mega-box">
          </div>
        </li>
        <li class="navbar-item"><router-link to="#" class="nav-link">Community</router-link></li>
        <li class="navbar-item"><router-link :to="{name:'About'}" class="nav-link">About</router-link></li>
      </ul>



      
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>

    </nav>
  </header>
</template>

<script>
import jQuery from "jquery";
import Header from "../components/Header"
const $ = jQuery;
window.$ = $;

export default {
  name:"Navbar",
  components: {Header},
  created(){
    $(window).scroll(function(){
      let getScrollY = $(this).scrollTop();

      if(getScrollY >= 100) $('#nav-barcs').addClass('fixed-top');
      else $('#nav-barcs').removeClass('fixed-top');
      });
  }
};



</script>
<style lang="scss" scoped>
nav{
  z-index: 1000;
}
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

// Start mega menu

// temporary

.mobile-item{
  display: none;
}

.menu-btn, .close-btn{
  display: none;
}

// Start Mega Box
// #courses:hover + input + label + .mega-box,
// #study:hover + input + label + .mega-box,
// #career:hover + input + label + .mega-box,
.nav-link:hover + input + label + .mega-box,
.mega-box:hover{
  visibility: visible;
  opacity: 1;
}

.mega-box{
  width: 100%;

  background-color: var(--primary);
  padding-top: 1rem;
  padding-bottom: 0.5rem;

  position: absolute;
  left: 0;

  visibility: hidden;
  opacity: 0;

  transition: all 0.5s ease-out;
  z-index: 2;
}

.search-container{
  max-width: 30rem;
}

.btn-icon{
  color: var(--light);
  font-size: 2rem;
}

.buttoncs:focus{
  outline: none;
}

.btns{
 white-space: nowrap;
 text-decoration: none;
 font-weight: bold;
}



// End Mega Box

//  End mega menu















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
  .navbar-brand img{
    width: 30px;
    height: 30px;
  }

  #small-menu span{
    font-size: 10px;
    margin: auto 0;
  }

  #small-menu .navbar-nav{
    margin: auto 0;
  }

  #small-menu .navbar-nav .navbar-item{
    margin: auto 0px;
    padding: 0;
    font-size: 10px;
  }

  #small-menu .navbar-nav .navbar-item:nth-of-type(1),
  #small-menu .navbar-nav .navbar-item:nth-of-type(2),
  #small-menu .navbar-nav .navbar-item:last-of-type{
    display: none;
  }
}
</style>