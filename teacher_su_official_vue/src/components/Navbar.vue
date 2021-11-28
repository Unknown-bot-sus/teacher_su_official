<template>
  <header id="home">
    <nav>
      <div class="navbar navbar-expand navbar-dark d-flex align-items-center justify-content-between bg-danger m-0 px-3 py-0" id="small-menu" role="navigation">
        <router-link to="/" class="navbar-brand d-flex justify-content-center align-items-center">
          <img src="../assets/img/logo.png" alt="logo" width="70" height="70" class="d-inline-block"/>
          <div class="vertical-line d-flex flex-column justify-content-around align-items-start text-light fw-bold mx-2 my-0 ">
            <span>Teacher Su</span>
            <span>Centre</span>
          </div>
        </router-link>

        <ul class="navbar-nav">
          <li class="navbar-item"><router-link to="#" class="nav-link mx-2 menu-items">Teacher Su Students</router-link></li>
          <li class="navbar-item"><a href="http://simp.teachersucenter.com/login" target="_blank" class="nav-link text-light mx-2 menu-items">Staff</a></li>
          <li class="navbar-item">
            <div class="d-flex align-item-center position-relative vertical-lines">
              <a href="http://library.teachersucenter.com" target="_blank" class="nav-link text-light mx-2 menu-items">Library</a>
            </div>
          </li>
          <li class="navbar-item"><router-link :to="{name:'Announcement'}" class="nav-link text-light mx-2 menu-items">News</router-link></li>
          <li class="navbar-item"><a href="tel:+959422490839" target="_blank" class="nav-link text-light  mx-2 menu-items">Contacts</a></li>
        </ul>
      </div>

      <div class="navbar navbar-expand navbar-dark bg-dark m-0 p-0 position-relative" id="mega-menu" role="navigation">
        <input type="radio" name="slider" id="menu-btn" class="tgbtn" hidden>
        <input type="radio" name="slider" id="close-btn" class="tgbtn" hidden>
        <div class="nav-red container-fluid bg-danger p-0">
          <ul class="navbar-nav container-fluid flex-column flex-lg-row justify-content-start justify-content-lg-center align-items-center bg-dark m-0 p-0">
            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>

            <li class="navbar-item">
                <a href="#" class="desktop-item nav-link">Courses<i class="fas fa-chevron-down mx-3"></i></a>
                <input type="checkbox" id="sm-course" class="tgbtn" hidden>
                <label for="sm-course" class="mobile-item text-light">Courses<i class="fas fa-chevron-down mx-3"></i></label>
                <ul class="mega-box">
                  <li class="nav-link position-relative">
                    courses<i class="fas fa-chevron-down mx-3"></i>
                    <ul class="mini-box">
                      <li><router-link to="/courses#courses-container" @click="chgActCourse('free')" class="nav-link">Free classes</router-link></li>
                      <li><router-link to="/courses#courses-container" @click="chgActCourse('ylearner')" class="nav-link">Young learners</router-link></li>
                      <li><router-link to="/courses#courses-container" @click="chgActCourse('ielts')" class="nav-link">IELTS</router-link></li>
                      <li><router-link to="/courses#courses-container" @click="chgActCourse('others')" class="nav-link">Others</router-link></li>
                    </ul>
                  </li>
                  <li><router-link :to="{name: 'Register'}" class="nav-link">How to apply</router-link></li>
                  <li><router-link :to="{name: 'Study'}" class="nav-link">How to apply scholarship</router-link></li>
                </ul>
            </li>

            <li class="navbar-item">
              <a href="#" class="desktop-item nav-link" id="study">Study with us<i class="fas fa-chevron-down mx-3"></i></a>
              <input type="checkbox" id="sm-study" class="tgbtn" hidden>
              <label for="sm-study" class="mobile-item text-light">Study with us<i class="fas fa-chevron-down mx-3"></i></label>
              <ul class="mega-box">
                <li class="nav-link">Apply to study<i class="fas fa-chevron-down mx-3"></i>
                  <ul class="mini-box">
                    <li><router-link :to="{name: 'Register'}" class="nav-link">How to apply</router-link></li>
                    <li><router-link :to="{name: 'Register'}" class="nav-link">New term start date</router-link></li>
                    <li><router-link :to="{name: 'Study'}" class="nav-link">Scholarship</router-link></li>
                    <li><router-link :to="{name: 'Courses'}" class="nav-link">View all courses</router-link></li>
                  </ul>
                </li>

                <li class="nav-link">Study tools and software<i class="fas fa-chevron-down mx-3"></i>
                  <ul class="mini-box">
                    <li><router-link :to="{name: 'Help'}" class="nav-link">Video-conferencing(zoom)</router-link></li>
                    <li><router-link :to="{name: 'Help'}" class="nav-link">Powerpoint(persentation)</router-link></li>
                    <li><router-link :to="{name: 'Help'}" class="nav-link">Video editing</router-link></li>
                  </ul>
                </li>

                <li class="nav-link">Extra-curriculum activites<i class="fas fa-chevron-down mx-3"></i>
                  <ul class="mini-box">
                      <li><router-link :to="{name: 'Community'}" class="nav-link">Clubs</router-link></li>
                      <li><router-link :to="{name: 'Community'}" class="nav-link">Academic consultation</router-link></li>
                      <li><router-link :to="{name: 'Community'}" class="nav-link">Health and well-beings</router-link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="navbar-item"><router-link :to="{name: 'Career'}" class="nav-link">Career Opportunities</router-link></li>
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
import { mapMutations } from 'vuex'

export default {
  name:"Navbar",
  components: {Header},
  data(){
    return {
      active: String,
    }
  },
  methods: {
    ...mapMutations([
      'chgActCourse',
    ])
  },
};
</script>
<style lang="scss" scoped>
nav{
  z-index: 1000;
}

.vertical-line{
  position: relative;
}

.vertical-line::before{
  position: absolute;
  top: 0;
  left: -0.5rem;
}

.vertical-line:hover::before{
  left: calc(100% + 00.5rem);
}

.vertical-line span{
  transition: all 0.5s;
}

.vertical-line:hover span{
  color: var(--primary);
}

.vertical-line{
  position: relative;
}

.vertical-line::before,
.vertical-lines::before,
.vertical-lines::after{
  content: '';
  width: 1px;
  height: 100%;
  background-color: white;
  transition: all 0.5s;
}

.vertical-lines::before{
  position: absolute;
  top: -100%;
  left: 50%;

  transform: translate(-50%, 25%);
}

.vertical-lines::after{
  position: absolute;
  bottom: -100%;
  left: 50%;

  transform: translate(-50%, -25%);
}

.vertical-lines:hover::before,
.vertical-lines:hover::after{
  width: 2px;
  transform: none;
}

.menu-btn, .close-btn{
  display: none;
}
  
#mega-menu{
  .mobile-item{
    display: none;
  }

  .navbar-nav{
    background-color: red;
  }

  .navbar-item{
    width: 20%;
    position: relative;
    text-align: center;
  }

  // Start Mega Box
  .nav-link:hover + input + label + .mega-box,
  .mega-box:hover{
    visibility: visible;
    opacity: 1;
  }

  .mega-box{
    width: 100%;

    font-size: 1.2rem;

    background-color: var(--dark);

    position: absolute;
    top: 100%;
    left: 0;

    list-style: none;
    margin: 0;
    padding: 0;

    text-align: left;

    visibility: hidden;
    opacity: 0;

    transition: all 0.2s ease-out;
    z-index: 2;

    

    .nav-link{
      position: relative;
      padding: 20px;
      border-bottom: 1px solid #666;
      font-size: 1.2rem;
      .mini-box{
        width: 120%;
        list-style: none;
        margin: 0;
        padding: 0;

        position: absolute;
        top: 0;
        left: 100%;

        display: none;
        visibility: hidden;
        opacity: 0;

        

        transition: all 0.3s;

        background-color: var(--dark);
      }
    }

    .nav-link:hover > .mini-box{
      display: block;
      visibility: visible;
      opacity: 1;
    }

    .nav-link:hover > .fa-chevron-down{
      transform: rotate(-90deg);
    }
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
      visibility: visible;
      opacity: 1;
      display: block;
    }

    .mega-box{
      font-size: 0.98rem;
      background-color: var(--dark);
      position: relative;
      display: none;

      .nav-link{
        .mini-box{
          width: 100%;
          position: relative;
          display: none;
          left: 0;
        }
      }

      .nav-link:hover .mini-box{
        display: block;
      }
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
      width: 70%;
      height: 120vh;

      position: fixed;
      top: 0;
      left: -100%;
      z-index: 100;

      transition: all 0.5s;
    }

    .navbar-nav .navbar-item{
      width: 100%;
      max-height: 2rem;
      text-align: center;
      margin-top: 2rem;
    }

    .navbar-nav .navbar-item:first-of-type{
      margin-top: 5rem;
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