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
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">News</router-link></li>
          <li class="navbar-item"><router-link to="#" class="nav-link bg-transparent mx-2 menuitemcs">Contacts</router-link></li>
        </ul>
      </div>

    <div class="wrapper">
      <input type="radio" name="slider" id="menu-btn">
      <input type="radio" name="slider" id="close-btn">
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li>
          <a href="#" class="desktop-item">Courses</a>
          <input type="checkbox" id="showMega">
          <label for="showMega" class="mobile-item">Courses</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="img.jpg" alt="">
              </div>
              <div class="row">
                <header>Design Services</header>
                <ul class="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        
        <li>
          <a href="#" class="desktop-item">Study with us</a>
          <input type="checkbox" id="showMega">
          <label for="showMega" class="mobile-item">Study with us</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="img.jpg" alt="">
              </div>
              <div class="row">
                <header>Design Services</header>
                <ul class="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <a href="#" class="desktop-item">Career Opportunities</a>
          <input type="checkbox" id="showMega">
          <label for="showMega" class="mobile-item">Career Opportunities</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <header>Design Services</header>
                <ul class="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <a href="#" class="desktop-item">Community</a>
          <input type="checkbox" id="showMega">
          <label for="showMega" class="mobile-item">Community</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="img.jpg" alt="">
              </div>
              <div class="row">
                <header>Design Services</header>
                <ul class="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <a href="#" class="desktop-item">About</a>
          <input type="checkbox" id="showMega">
          <label for="showMega" class="mobile-item">About</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="img.jpg" alt="">
              </div>
              <div class="row">
                <header>Design Services</header>
                <ul class="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>

    </nav>
  </header>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name:"Navbar",

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

// Start mega menu
nav{
  z-index: 99;
  width: 100%;
  
  background: #242526;
}
nav .wrapper{
  position: relative;
  max-width: 1300px;
  padding: 0px 30px;
  height: 70px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper .nav-links{
  display: inline-flex;
  width: 100%;
  justify-content: space-around;
}
.nav-links li{
  list-style: none;
}
.nav-links li a{
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 9px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.nav-links li a:hover{
  background: #3A3B3C;
}
.nav-links .mobile-item{
  display: none;
}

.nav-links li:hover .mega-box{
  transition: all 0.3s ease;
  top: 70px;
  opacity: 1;
  visibility: visible;
}

.mega-box{
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 30px;
  top: 85px;
  opacity: 0;
  visibility: hidden;
}
.mega-box .content{
  background: #242526;
  padding: 25px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0,0,0,0.15);
}
.mega-box .content .row{
  width: calc(25% - 30px);
  line-height: 45px;
}
.content .row img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content .row header{
  color: #f2f2f2;
  font-size: 20px;
  font-weight: 500;
}
.content .row .mega-links{
  margin-left: -40px;
  border-left: 1px solid rgba(255,255,255,0.09);
}
.row .mega-links li{
  padding: 0 20px;
}
.row .mega-links li a{
  padding: 0px;
  padding: 0 20px;
  color: #d9d9d9;
  font-size: 17px;
  display: block;
}
.row .mega-links li a:hover{
  color: #f2f2f2;
}
.wrapper .btn{
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: none;
}
.wrapper .btn.close-btn{
  position: absolute;
  right: 30px;
  top: 10px;
}
@media screen and (max-width: 970px) {
  .wrapper .btn{
    display: block;
  }
  .wrapper .nav-links{
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: #242526;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0,0,0,0.18);
    transition: all 0.3s ease;
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
  #menu-btn:checked ~ .nav-links{
    left: 0%;
  }
  #menu-btn:checked ~ .btn.menu-btn{
    display: none;
  }
  #close-btn:checked ~ .btn.menu-btn{
    display: block;
  }
  .nav-links li{
    margin: 15px 10px;
  }
  .nav-links li a{
    padding: 0 20px;
    display: block;
    font-size: 20px;
  }
  .nav-links .drop-menu{
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.3s ease;
  }
  #showDrop:checked ~ .drop-menu,
  #showMega:checked ~ .mega-box{
    max-height: 100%;
  }
  .nav-links .desktop-item{
    display: none;
  }
  .nav-links .mobile-item{
    display: block;
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 500;
    padding-left: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  .nav-links .mobile-item:hover{
    background: #3A3B3C;
  }

  .mega-box{
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .mega-box .content{
    box-shadow: none;
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
  .mega-box .content .row{
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .mega-box .content .row:nth-child(1),
  .mega-box .content .row:nth-child(2){
    border-top: 0px;
  }
  .content .row .mega-links{
    border-left: 0px;
    padding-left: 15px;
  }
  .row .mega-links li{
    margin: 0;
  }
  .content .row header{
    font-size: 19px;
  }
}
nav input{
  display: none;
}
.body-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding: 0 30px;
}
.body-text div{
  font-size: 45px;
  font-weight: 600;
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