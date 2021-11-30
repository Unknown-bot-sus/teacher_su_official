<template>
  <div class="container-fluid">
      <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">About us</h5>
            </div>
        </div>

      <div class="row">
            <div class="col-12 p-0">
                <div class="banner-img">
                    <div class="banner d-flex align-items-center justify-content-center p-md-5">
                        
                    </div>
                </div>
            </div>
        </div>

      <div class="row my-5">
            <h2 class="header1 text-center mt-3 wow animate__fadeInUp">About <span class="text-danger">Teacher Su</span> Centre</h2>

        <div class="col-12 d-flex align-items-center justify-content-center p-3 p-md-5">

            <div class="para-about wow animate__fadeInUp">
              <p style="text-indent:3rem;"> Teacher Su Center started out as an IELTS and English training center in Naypyitaw, Myanmar in the year 2018.Teacher Su moved online in April 2020 because of the corona virus pandemic. Since then, the center rapidly grew.
                Under the leadership of its young and talented founder Su Htet Zaw, the center quikly developed a massive online profile.
                </p>
              <p style="text-indent:3rem;"> As of October 2021, the center has over 100 classes offering as many as 15 different courese including personal development courses and 
                additional services to its students and staff members. Over 4500 students are currently attending the center from all over the nation.</p>
            </div>
        </div>
      </div>

       <div class="row mt-5 my-md-5">
            <h2 class="header1 text-center mt-3 wow animate__fadeInUp">About <span class="text-danger">Teacher Su</span></h2>
            
                <div class="col-12 wow animate__fadeInUp my-3 my-md-5">
                    <div class="d-flex align-items-center justify-content-center flex-column">
                        <img src="../assets/img/Study9.png" class="rev-img mb-2" alt="">
                        <div>
                            <p class="fw-bold text-center m-0">Su Htet Zaw</p>
                            <p class="text-muted text-center m-2">Founder and CEO</p>
                        </div>
                    </div>
                </div>    
                <div class="wow animate__fadeInUp para-t">
                    
                        <p style="text-indent:3rem;" >
                            Su Htet Zaw (Teacher Su) is the CEO and Founder of the Teacher Su Language Centre, established in 2018. She received her Bachelor’s degree from Yangon University of Education (YUOE) in 2013. 
                            She got the Myanmar Presidential Scholarship while working as a high school teacher in Yangon; thus, pursued her Master’s degree in Educational Leadership and Management at La Trobe University, Melbourne. 
                            After receiving her Master’s degree, she worked as a deputy planning officer at the Department of Educational Research, Planning and Training, Ministry of Education, Myanmar. 
                            She is passionate about volunteering and leadership activities. 
                            During her two years in Australia, Teacher Su outstandingly engaged in eleven volunteering activities and was hired for three professional works. 
                            She founded the Red Cross University Club and served as the President of the club. 
                            Her volunteering works include being an Executive Assistant at the National Education office (CISA), an Executive Assistant at the National Undergraduate office (CISA), a volunteer tutor, 
                            a CISA National Conference Program Coordinator, a postgraduate student representative at Library consultative committee, a Connect Mentor, Social Media Communication Assistant and International Host at La Trobe. 
                            Moreover, she worked as a School Partnership Program facilitator, casual registration staff and connect leader at La Trobe University (Melbourne). 
                            She is also a member of the Golden Key International Honour Society, which membership is invitation only and applies to the top 15% of the respective university. 
                            Due to her excellent leadership and academic skills, she was proudly awarded ‘Victoria International Student of the Year - Higher Education (2017)’. 
                            She is currently working as the CEO of the centre to bring quality education and provide international standard facilities to young students.
                        </p>

                        
                    
                </div>
            
        </div>

  </div>
</template>

<script>
import Header from "../components/Header"
import WOW from "wow.js"

  export default {
    name:"About",  
     mounted () {
        var wow = new WOW(
      {
        boxClass:     'wow',      
        animateClass: 'animate__animated', 
        offset:       0,          
        mobile:       true,       
        live:         true,       
        callback:     function(box) {
        },
        scrollContainer: null,   
        resetAnimation: true,     
      }
    );
    wow.init();

  },
    components:{
      Header
    }
  }
</script>

<style  scoped>

   .banner{
        background-color: rgba(148, 148, 148, 0.459);
        height: 20vh;
    }
    .banner-img{
        background-image: url(../assets/img/Study8.png);
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
    }
      .rev-img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
    .header1{
        font-size: 2.7rem;
        font-family: 'Rock Salt', cursive;
    }

    @media only screen and (max-width: 816px){
        .header1{
        font-size: 2rem;
        }
    }
    @media only screen and (max-width: 532px){
        .header1{
        font-size: 1rem;
        }
    }

    @media only screen and (min-width: 757px){
        .banner-text{
            font-size: 4rem;
        }
        .banner{
            height: 35vh;
        }
    }
    @media only screen and (max-width: 427px){
        .banner-text{
            font-weight: normal;
            font-size: 2.6rem;
        }
    }
    @media only screen and (min-width: 824px){
        .para-about{
          width: 60vw;
        }
        .para-t{
          padding: 0 100px;
        }
    }
</style>