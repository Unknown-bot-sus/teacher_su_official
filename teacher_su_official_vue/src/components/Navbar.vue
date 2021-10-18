<template>
  <header id="home">
    <nav>
      <div class="navbar navbar-expand navbar-dark d-flex align-items-center justify-content-between bg-danger m-0 px-3 py-0" id="small-menu" role="navigation">
        <router-link to="/" class="navbar-brand d-flex justify-content-center align-items-center">
          <img src="../assets/img/logo.png" alt="logo" width="70" height="70" class="d-inline-block"/>
          <div class="vertical-line bg-light"></div>
          <div class="d-flex flex-column justify-content-around align-items-start text-light fw-bold mx-2 my-0 ">
            <span>Teacher Su</span>
            <span>Centre</span>
          </div>
        </router-link>

        <ul class="navbar-nav">
          <li class="navbar-item"><router-link to="#" class="nav-link mx-2 menu-items">Teacher Su Students</router-link></li>
          <li class="navbar-item"><a href="http://simp.teachersucenter.com/login" class="nav-link text-light mx-2 menu-items">Staff</a></li>
          <li class="navbar-item">
            <div class="d-flex align-item-center position-relative">
              <div class="vertical-line bg-dark vertical-line1"></div>
              <a href="http://library.teachersucenter.com" class="nav-link text-light mx-2 menu-items">Library</a>
              <div class="vertical-line bg-dark vertical-line2"></div>
            </div>
          </li>
          <li class="navbar-item"><router-link :to="{name:'Announcement'}" class="nav-link text-light mx-2 menu-items">News</router-link></li>
          <li class="navbar-item"><a href="tel:+959422490839" class="nav-link text-light  mx-2 menu-items">Contacts</a></li>
        </ul>
      </div>

      <div class="navbar navbar-expand navbar-dark bg-dark m-0 p-0 position-relative" id="mega-menu" role="navigation">
        <input type="radio" name="slider" id="menu-btn" class="tgbtn" hidden>
        <input type="radio" name="slider" id="close-btn" class="tgbtn" hidden>
        <div class="nav-red container-fluid bg-danger p-0">
            <ul class="navbar-nav container-fluid flex-column flex-lg-row justify-content-start justify-content-lg-around align-items-center bg-dark m-0 p-0">
              <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>

              <li class="navbar-item">
                <a href="#" class="desktop-item nav-link">Courses<i class="fas fa-chevron-down m-3"></i></a>
                <input type="checkbox" id="sm-course" class="tgbtn" hidden>
                <label for="sm-course" class="mobile-item text-light">Courses<i class="fas fa-chevron-down m-3"></i></label>
                <div class="row d-flex justify-content-sm-around mega-box m-0">
                    <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center m-0 p-1">
                      <h3 class="text-light">Browse all courses</h3>
                      <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                          <ul class="list-unstyled mx-3 d-flex flex-column align-items-start">
                            <li><router-link to="/courses#courses-container" @click="$emit('act_course', 'free')" class="text-light nav-link">Free classes</router-link></li>
                            <li><router-link to="/courses#courses-container" @click="$emit('act_course', 'ylearner')" class="text-light nav-link">Young learners</router-link></li>
                            <li><router-link :to="{name: 'Register'}" class="btns form-control">How to apply</router-link></li>
                          </ul>

                          <ul class="list-unstyled mx-3 d-flex flex-column align-items-start">
                            <li><router-link to="/courses#courses-container" @click="$emit('act_course', 'ielts')" class="text-light nav-link">IELTS</router-link></li>
                            <li><router-link to="/courses#courses-container" @click="$emit('act_course', 'others')" class="text-light nav-link">Duolingo</router-link></li>
                            <li><router-link :to="{name: 'Register'}" class="btns form-control">How to apply scholarship</router-link></li>
                          </ul>
                      </div>
                      <div class="form-group m-3">
                        <router-link :to="{name: 'Courses'}" class="col-4 text-start form-control btns">View all courses</router-link>
                      </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                      <img src="../assets/img/Study4.png" />
                    </div>

                </div>
            </li>

              <li class="navbar-item">
                <a href="#" class="desktop-item nav-link" id="study">Study with us<i class="fas fa-chevron-down m-3"></i></a>
                <input type="checkbox" id="sm-study" class="tgbtn" hidden>
                <label for="sm-study" class="mobile-item text-light">Study with us<i class="fas fa-chevron-down m-3"></i></label>
                <div class="row d-flex justify-content-start justify-content-sm-around mega-box m-0">
                  <div class="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-start align-items-sm-center">
                    <h3 class="text-light border-bottom border-light p-2 heading">Apply to study</h3>
                    <ul class="list-unstyled d-flex flex-column justify-content-start align-items-start">
                      <li><router-link :to="{name: 'Register'}" class="nav-link">How to apply</router-link></li>
                      <li><router-link :to="{name: 'Register'}" class="nav-link">New term start date</router-link></li>
                      <li><router-link :to="{name: 'Study'}" class="nav-link">Scholarship</router-link></li>
                      <li><router-link :to="{name: 'Courses'}" class="form-control btns">View all courses</router-link></li>
                    </ul>
                  </div>

                  <div class="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-start align-items-sm-center">
                    <h3 class="text-light border-bottom border-light p-2 heading">Study tools and software</h3>
                    <ul class="list-unstyled d-flex flex-column justify-content-start align-items-start">
                      <li><router-link to="#" class="nav-link">Video-conferencing(zoom)</router-link></li>
                      <li><router-link to="#" class="nav-link">Powerpoint(persentation)</router-link></li>
                      <li><router-link to="#" class="nav-link">Video editing</router-link></li>
                    </ul>
                  </div>

                    <div class="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-start align-items-sm-center">
                      <h3 class="text-light border-bottom border-light p-2 heading">Extra-curriculum activites</h3>
                      <ul class="list-unstyled d-flex flex-column justify-content-center align-items-start">
                        <li><router-link :to="{name: community}" class="form-control btns">Clubs</router-link></li>
                        <li><router-link :to="{name: community}" class="nav-link">Academic consultation</router-link></li>
                        <li><router-link :to="{name: community}" class="nav-link">Health and well-beings</router-link></li>
                      </ul>
                  </div>
                </div>
              </li>

              <li class="navbar-item">
                <a href="#" class="desktop-item nav-link" id="career">Career Opportunities<i class="fas fa-chevron-down m-3"></i></a>
                <input type="checkbox" id="sm-career" class="tgbtn" hidden>
                <label for="sm-career" class="mobile-item text-light">Career<i class="fas fa-chevron-down m-3"></i></label>
                <div class="row d-flex justify-content-start justify-content-sm-around mega-box m-0">

                  <div class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-start align-items-sm-center">
                    <h3 class="text-light border-bottom border-light p-2">Career</h3>
                    <ul class="list-unstyled d-flex flex-column justify-content-center align-items-start">
                      <li><router-link :to="{name: 'Career'}" class="form-control btns">View careers</router-link></li>
                    </ul>
                  </div>

                  <div class="col-12 col-lg-6 d-flex flex-column justify-content-around align-items-start align-items-sm-center">
                    <h3 class="text-light border-bottom border-light p-2">Contact us</h3>
                    <ul class="list-unstyled d-flex flex-column justify-content-center align-items-start">
                      <li><router-link to="#" class="nav-link">Phone no. 093454343</router-link></li>
                      <li><router-link to="#" class="nav-link">Address: Pa 129, Myo Ma Market, Zabuthiri Township, Naypyidaw, Naypyidaw, Myanmar</router-link></li>
                    </ul>

                      <div class="d-flex justify-content-md-center my-3">
                        <a href="https://www.facebook.com/Teacher-Su-270139473932097" title="facebook" target="_blank" class="d-block mx-2"><i class="fab fa-facebook-square btn-icon"></i></a>

                        <a href="https://www.facebook.com/messages/t/270139473932097" title="messenger" target="_blank" class="d-block mx-2"><i class="fab fa-facebook-messenger btn-icon"></i></a>

                        <a href="mailto:hello@teachersucenter.com" title="gmail" target="_blank" class="d-block mx-2"><i class="fal fa-envelope btn-icon"></i></a>
                      </div>
                  </div>
                </div>
              </li>
              <li class="navbar-item"><router-link :to="{name: 'Community'}" class="nav-link">Community</router-link></li>
              <li class="navbar-item"><router-link :to="{name:'About'}" class="nav-link">About</router-link></li>
              </ul>

          </div>
              <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
      </div>
    </nav>
  </header>
</template>

<script>
import Header from "../components/Header"

export default {
  name:"Navbar",
  components: {Header},
  data(){
    return {
      active: String,
    }
  }
};
</script>
<style lang="scss" scoped>
nav{
  z-index: 1000;
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


.menu-btn, .close-btn{
  display: none;
}
  
#mega-menu{
  .mobile-item{
    display: none;
  }

  // Start Mega Box
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

    transition: all 0.2s ease-out;
    z-index: 2;

    border-bottom: 1px solid var(--dark);
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
  }

  .heading{
    white-space: nowrap;
  }
}

/* custom scroll bar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #242526;
}
::-webkit-scrollbar-thumb {
  background: #3A3B3C;
}

@media (max-width: 991.98px) {
  .vertical-line{
    display: none;
  }
   // Star mega menu

  #mega-menu{
      // Mega box
    .tgbtn:checked + label + .mega-box{
      background: var(--dark);
      position: relative;
      visibility: visible;
      opacity: 1;
      width: 100%;
    }

    .mega-box:hover{
      visibility: hidden;
      opacity: 0;
    }

    .menu-btn, .close-btn{
      color: #fff;
      display: block;
    }

    .close-btn{
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .desktop-item{
      display: none;
    }

    .mobile-item{
      display: inline-block;
      cursor: pointer;
    }

    .navbar-nav{
      background-color: var(--primary);
      width: 75%;
      height: 120vh;
      position: absolute;
      top: 0;
      left: -100%;
      z-index: 100;
      overflow: scroll;

      transition: all 0.5s;
    }

    .navbar-nav .navbar-item{
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    }
  }



  #menu-btn:checked ~ .btn.menu-btn{
    display: none;
  }

  #close-btn:checked ~ .btn.menu-btn{
    display: block;
  }

  #menu-btn:checked + input + div .navbar-nav{
    left: 0%;
  }
  // End mega box
}

@media (max-width:767.98px){
  .heading{
    font-size: 1rem;
    white-space: nowrap;
    font-weight: bold;
  }
 

  // End mega menu
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
    font-size: 1rem;
  }

  #small-menu .navbar-nav .navbar-item:nth-of-type(1),
  #small-menu .navbar-nav .navbar-item:nth-of-type(2){
    display: none;
  }
}

@media (max-width: 575.98px) {
  #small-menu .navbar-nav .navbar-item{
    margin: auto 0px;
    padding: 0;
    font-size: 0.5rem;
  }
}
</style>