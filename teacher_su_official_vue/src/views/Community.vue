<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Our communities</h5>
            </div>
        </div>
         <div class="row">
            <div class="col-12 p-0">
                <div class="banner-img">
                    <div class="banner d-flex align-items-center justify-content-center p-md-5">
                        <div class="p-5">
                            <Header class="banner-text text-light" title="Our Community"></Header>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Club
        v-for="(club, index) in data"
        :key="index"
        v-bind="club"
        :img_dir="img_dir[index % 2]"
        ></Club>
    </div>
</template>

<script>
import Club from "../components/Club.vue"
import WOW from "wow.js"
    export default {
        name:"Community",
        components: {
            Club,
        },
        data() {
            return {
                img_dir: ['left', 'right'],
                data: [
                    {fileName:"debate.png", title: "Debate Club", description: "Do you like Researching? Exploring new topics, Brainstorming and Public Speaking? Then, our Debate Club is for you! Here, we discuss all sorts of topics, find solutions to global problems and yes, we DEBATE !!! We have 2 weeks training period where we practice various topics before we actually get to our Debate competition days. Carrying out discussion, table topic and “what if” sections, we try to boost your confidence in speaking and get ready for the debate!Having fun sections for club members...we create a friendly atmosphere inside out. In addition, every club member is given a good opportunity to think out of the box, share ideas, work together and experience public speaking.Our mentors and moderators will be there supporting and encouraging members to get motivated and be able to speak out.Let’s get out of our comfort zone and experience a whole other dimension! Welcome to Debate Club!"},
                    {fileName:"enter.png", title: "Entertainment Club", description: "The Entertainment Club offers a place for students of the same passion and hobby (related to music)to hang out and share their talents and knowledge, and at the same time helps to enlarge your social circle. The club consists of mainly - Singing (Tr. Mia), Dancing (Tr. Kein), Voice Acting (Tr. Emily), Guitar, ukulele and piano sections (Tr.  Justin and Tr. Mia. Concerning these corners, we do challenges, show off our talents, receive feedback from moderators and members, collaborate with each other as well as give lectures for each corner. We create a breakout room for each section and you are also allowed to switch rooms in between the break time.~ But that doesn’t mean you are restricted to only two corners. You can change to other sections the next day if you desire ~ "},
                    {fileName:"art.png", title: "Art Club", description: "A place where you can let your imagination live! Share your ideas, inspire your creativity and expand your knowledge. The Art Club offers a community where you can practice and share your drawings and painting. Here, students can not only show off their talents but also have lots of fun hanging out with friends.  Due to the population of the members, the art club has to be divided into two sessions and each session offers a unique sense of art, varied by age and interests.Our club offers many opportunities for students to learn digital art starting from basics to the most theoretical forms of art. We apply colour theories, perspectives, structures, digital appliances and sometimes even the most various forms of art: handicrafts, designs, edits, generated arts. Our mentors do care for each and every student's feedback and reach a hand for those who need help with the lessons or the projects."},
                    {fileName:"yoga.png", title: "Yoga Club", description: "Yoga is all about serenity. Yoga does more than burn calories and tone muscles. It's a total mind-body workout that combines strengthening and stretching poses with deep breathing and meditation or relaxation. An early morning routine of yoga would be just perfect to get yourself ready to set off to your day, fresh and energized."},
                    {fileName:"comet.jpg", title: "Interactive Storytelling Club", description: "Rather than just reading the designated story for the day together, we also discuss the moral of the story with each other afterwards. What’s more interesting is, students are also encouraged to create unique versions of the storyline of some well-known stories. In our sessions here, students are encouraged and inspired by each other to bring out their creative minds. To top it all off, it’s worth a while to join our club for some little reading adventures."},
                    {fileName:"comet.jpg", title: "Video Editing Club", description: "Post-production is primarily the editing stage. But why is video editing important?  If you want to make your video superb or interesting, we are always welcome from our video editing club. The video editing club offers special chances to learn to make a professional and wonderful video from basic to advanced levels of editing. In our video editing club, there are two types of editing we can learn (1) Editing based on Phones (2) Editing based on Computers. If you join our club, You will get something different."},
                    {fileName:"counselling.jpg", title: "Tele Counselling Program", description: "This is one of the opportunities that Teacher Su centre students can be benefited. As we understand that a lot of students are overburdened experiencing hardship in all aspects, we have provided a telephone counselling program, a modern way of receiving therapy through a secure platform, to help you release your stress. You can find the booking form in the respective google classroom. Your booking will be confirmed via email and if you receive the email, Tr. Shaye, who is your counsellor, will call you at the time as described in the email."},
                    {fileName:"tandl.jpg", title: "Teaching and Learning English Club", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi placeat optio unde vero eum illo nemo laboriosam ipsum, officiis deserunt praesentium aperiam beatae et provident cupiditate fugiat dolores. Incidunt!loLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quidem similique iste, tenetur voluptatem repellat error dolores tempora accusantium, autem fugiat nemo, quisquam esse necessitatibus reiciendis ratione vitae. Labore."},
                ],
            }
        },
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
}
</script>

<style  scoped>
.image{
    width: 40vw;
}
.banner{
        background-color: rgba(148, 148, 148, 0.459);
        height: 30vh;
        min-height: 30vh;
    }
    .banner-img{
        background-image: url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
@media only screen and (max-width:766px) {
    .image{
        width: 80vw;
    }
}
@media only screen and (max-width: 484px){
        .courses-text{
        font-size: 1.5rem;
        }
}
@media only screen and (min-width: 757px){
        .banner-text{
            font-size: 4rem;
        }
    }
    @media only screen and (max-width: 427px){
        .banner-text{
            font-weight: normal;
            font-size: 2.6rem;
        }
    }
</style>