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





    <div class="navbar navbar-expand navbar-dark bg-dark m-0 p-0 position-relative" id="mega-menu" role="navigation">
      <input type="radio" name="slider" id="menu-btn" class="tgbtn" hidden>
      <input type="radio" name="slider" id="close-btn" class="tgbtn" hidden>
      <div class="nav-red container-fluid bg-danger p-0">
      <ul class="navbar-nav navbar-dark d-flex flex-column flex-md-row justify-content-start justify-content-md-around align-items-center container-fluid  bg-dark m-0 p-0">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>

        <li class="navbar-item">
          <a href="#" class="desktop-item nav-link" id="courses">Courses<i class="fas fa-chevron-down m-3"></i></a>
          <input type="checkbox" id="sm-course" class="tgbtn" hidden>
          <label for="sm-course" class="mobile-item text-light">Courses<i class="fas fa-chevron-down m-3"></i></label>
          <div class="row d-flex justify-content-start justify-content-sm-around mega-box m-0">
              <div class="col-12 col-md-4 d-flex flex-column justify-content-around align-items-start align-items-sm-center m-0 px-4">
                <div class="input-group search-container">
                  <input type="text" id="search-bar" class="form-control" placeholder="Search for a course"/>
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary bg-transparent" type="button"><i class="fad fa-search text-light px-1"></i></button>
                  </div>
                </div>
                <router-link :to="{name: 'Courses'}" class="nav-link text-center">View all courses</router-link>
              </div>

              <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-start align-items-sm-center m-0 p-1">
                <h3 class="text-light">Browse all courses</h3>
                <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                    <ul class="list-unstyled mx-3">
                      <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Free classes</router-link></li>
                      <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Young learners</router-link></li>
                      <li><router-link :to="{name: 'Courses'}" class="text-light nav-link">Research Writing Course</router-link></li>
                    </ul>
                    <ul class="list-unstyled mx-3">
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

              <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-start align-items-sm-center m-0 p-1">
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
          <input type="checkbox" id="sm-study" class="tgbtn" hidden>
          <label for="sm-study" class="mobile-item text-light">Study<i class="fas fa-chevron-down m-3"></i></label>
          <div class="row d-flex justify-content-start justify-content-sm-around mega-box m-0">
            <div class="col-12 col-md-3 d-flex flex-column justify-content-around align-items-start align-items-sm-center">
              <h3 class="text-light border-bottom border-light p-2">Apply to study</h3>
              <ul class="list-unstyled d-flex flex-column justify-content-start align-items-start">
                <li><router-link to="#" class="nav-link">How to apply</router-link></li>
                <li><router-link to="#" class="nav-link">New term start date</router-link></li>
                <li><router-link to="#" class="nav-link">Scholarship</router-link></li>
                <li><router-link to="#" class="form-control btns mx-3">View all courses</router-link></li>
              </ul>
            </div>

             <div class="col-12 col-md-3 d-flex flex-column justify-content-start align-items-start align-items-sm-center">
              <h3 class="text-light border-bottom border-light p-2">Study tools and software</h3>
              <ul class="list-unstyled d-flex flex-column justify-content-center align-items-start">
                <li><router-link to="#" class="nav-link">Video-conferencing(zoom)</router-link></li>
                <li><router-link to="#" class="nav-link">Powerpoint(persentation)</router-link></li>
                <li><router-link to="#" class="nav-link">Video editing</router-link></li>
              </ul>
             </div>

              <div class="col-12 col-md-3 d-flex flex-column justify-content-start align-items-start align-items-sm-center">
                <h3 class="text-light border-bottom border-light p-2">Study support and resources</h3>
                <ul class="list-unstyled d-flex flex-column justify-content-start align-items-start">
                  <li><router-link to="#" class="nav-link">IT support</router-link></li>
                  <li><router-link to="#" class="nav-link">Library</router-link></li>
                </ul>
             </div>

              <div class="col-12 col-md-3 d-flex flex-column justify-content-around align-items-start align-items-sm-center">
                <h3 class="text-light border-bottom border-light p-2">Extra-curriculum activites</h3>
                <ul class="list-unstyled d-flex flex-column justify-content-center align-items-start">
                  <li><router-link to="#" class="nav-link">Art Club</router-link></li>
                  <li><router-link to="#" class="nav-link">Comet Conversation Club</router-link></li>
                  <li><router-link to="#" class="nav-link">Debate Club</router-link></li>
                  <li><router-link to="#" class="nav-link">Entertainment Club</router-link></li>
                  <li><router-link to="#" class="nav-link">Health &#38; Well-being</router-link></li>
                </ul>
             </div>
          </div>
        </li>

        <li class="navbar-item">
          <a href="#" class="desktop-item nav-link" id="career">Career Opportunities<i class="fas fa-chevron-down m-3"></i></a>
          <input type="checkbox" id="sm-career" class="tgbtn" hidden>
          <label for="sm-career" class="mobile-item text-light">Career<i class="fas fa-chevron-down m-3"></i></label>
          <div class="row d-flex justify-content-start justify-content-sm-around mega-box m-0">

            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start align-items-sm-center">
              <h3 class="text-light border-bottom border-light p-2">Career</h3>
              <ul class="list-unstyled d-flex flex-column justify-content-center align-items-start">
                <li><router-link to="#" class="nav-link">Maing teacher</router-link></li>
                <li><router-link to="#" class="nav-link">Assistant teacher</router-link></li>
                <li><router-link to="#" class="nav-link">Graphic designer</router-link></li>
                <li><router-link to="#" class="nav-link">Tech team</router-link></li>
              </ul>
            </div>

            <div class="col-12 col-md-6 d-flex flex-column justify-content-around align-items-start align-items-sm-center">
              <h3 class="text-light border-bottom border-light p-2">Contact us</h3>
              <ul class="list-unstyled d-flex flex-column justify-content-center align-items-start">
                <li><router-link to="#" class="nav-link">Phone no. 093454343</router-link></li>
                <li><router-link to="#" class="nav-link">Address: Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type<br/> and scrambled it to make a type specimen book</router-link></li>
                <li><router-link to="#" class="nav-link">Graphic designer</router-link></li>
                <li><router-link to="#" class="nav-link">Tech team</router-link></li>
              </ul>

                <div class="d-flex my-3">
                  <a  href="#" target="_blank" class="d-block mx-2"><i class="fab fa-viber btn-icon"></i></a>

                  <a href="#" target="_blank" class="d-block mx-2"><i class="fab fa-facebook-messenger btn-icon"></i></a>

                  <a href="#" target="_blank" class="d-block mx-2"><i class="fab fa-telegram btn-icon"></i></a>
                </div>
            </div>
          </div>
        </li>
        <li class="navbar-item"><router-link to="#" class="nav-link">Community</router-link></li>
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
.mobile-item{
  display: none;
}

.menu-btn, .close-btn{
  display: none;
}
// Start Mega Box
.nav-link:hover + input + label + .mega-box,
.mega-box:hover{
  visibility: visible;
  opacity: 1;
}

#mega-menu .nav-link:hover{
  border: 1px solid var(--light);
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
 text-decoration: none;
 font-weight: bold;
}

.nav-link.focus{
  border-bottom: 1px solid var(--light);
}



// End Mega Box

//  End mega menu

@media (max-width:767.98px){
  // Star mega menu
  .desktop-item{
    display: none;
  }

  .mobile-item{
    display: inline-block;
  }

  // Mega box
  .mega-box{
    background: grey;
  }
  .tgbtn:checked + label + .mega-box{
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

  #mega-menu .navbar-nav{
    width: 75%;
    height: 120vh;
    position: absolute;
    top: 0;
    left: -100%;
    overflow: scroll;
  }

  #mega-menu .navbar-nav .navbar-item{
    width: 100%;
    text-align: center;
    margin-top: 2rem;
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
  #small-menu .navbar-nav .navbar-item:nth-of-type(2),
  #small-menu .navbar-nav .navbar-item:last-of-type{
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