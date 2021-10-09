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
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Staff</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Alumni</router-link></li>
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

      <ul class="navbar-nav navbar-dark d-flex justify-content-around align-items-center container-fluid  bg-dark">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>

        <li class="navbar-item">
          <router-link :to="{name: 'Courses'}" class="desktop-item nav-link">Courses<i class="fas fa-chevron-down m-3"></i></router-link>
          <input type="checkbox" id="showMega" class="tgbtn" hidden>
          <label for="showMega" class="mobile-item">Courses</label>
          <div class="mega-box">
            <div class="row d-flex justify-content-around">
                <div class="col-12 col-md-4 d-flex flex-column justify-content-around align-items-center m-0 p-1">
                  <div class="form-group d-flex justify-content-center align-items-center search-container">
                    
                    <input type="text" id="search-bar" class="form-control" placeholder="Search for a course"/>
                    <label for="search-bar"><i class="fad fa-search text-light px-1"></i></label>
                  </div>
                  <router-link :to="{name: 'Courses'}" class="nav-link text-center">View all courses</router-link>
                </div>

                <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center m-0 p-1">
                  <h3 class="text-light">Browse all courses</h3>
                  <div class="d-flex  justify-content-between align-items-center">
                      <ul class="mega-links list-unstyled mx-3">
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Free classes</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Young learners</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Research Writing Course</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">How to apply</router-link></li>
                      </ul>
                      <ul class="mega-links list-unstyled mx-3">
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">IELTS</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Duolingo</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Speak English Professionally &amp; <br/>English Grammar</router-link></li>
                        <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">How to apply scholarship</router-link></li>
                      </ul>
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
          </div>
      </li>

        <li class="navbar-item"><router-link to="#" class="nav-link">Study with us<i class="fas fa-chevron-down m-3"></i></router-link></li>
        <li class="navbar-item"><router-link to="#" class="nav-link">Career Opportunities<i class="fas fa-chevron-down m-3"></i></router-link></li>
        <li class="navbar-item"><router-link to="#" class="nav-link">Community<i class="fas fa-chevron-down m-3"></i></router-link></li>
        <li class="navbar-item"><router-link :to="{name:'About'}" class="nav-link">About<i class="fas fa-chevron-down m-3"></i> </router-link></li>
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

.menu-btn, .close-btn{
  display: none;
}

.mega-box{
  width: 100%;

  background-color: var(--primary);

  padding: 1rem;

  position: absolute;
  left: 0;

}

.search-container{
  background-color: var(--dark);
  padding: 0;
  padding-right: 5px;
}

.search-container .fa-search{
  color: var(--light);
}

.buttoncs{
}

.btn-icon{
  color: var(--light);
  font-size: 2rem;
}

.buttoncs:focus{
  outline: none;
}

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