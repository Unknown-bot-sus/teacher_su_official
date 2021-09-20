<template>

    <footer class="container-fluid bg-secondary p-5">
        <div class="logo-container">
            <img src="../assets/logo.png" alt="logo" width="70" height="70">
            <div class="vertical-line bg-light align-middle d-inline-block"></div>
            <span class="fw-bold text-light h2 align-middle">Teacher Su Centre</span>
        </div>
        
    
        <div class="row content-container">
            <div class="col-lg-4 col-6">
                <ul class="text-light list-unstyled">
                    <li><router-link to="#"></router-link>Home <i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="#"></router-link>Courses <i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="#"></router-link>Study with us <i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="#"></router-link>Career Opprotunities <i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="#"></router-link>Community <i class="fas fa-chevron-right"></i></li>
                    <li><router-link to="#"></router-link>About <i class="fas fa-chevron-right"></i></li>
                </ul>
            </div>

            <div class="col-lg-4 col-6 d-flex flex-column align-items-start justify-content-space-between text-light">
                <span>Phone:<a href="tel:09343434" target="_blank">09343434</a></span>
                <span>Address:</span>
                <span>Email:<a href="mailto:example@gmail.com" target="_blank">exmaple&commat;gmail.com</a></span>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 social-media-container">
                <a href="#" title="facebook"><i class="fab fa-facebook-square"></i></a>
                <a href="#" title="viber"><i class="fab fa-viber"></i></a>
                <a href="#" title="linkedin"><i class="fab fa-linkedin"></i></a>
                <a href="#" title="telegram"><i class="fab fa-telegram"></i></a>
            </div>

        </div>
        <div class="footer row">
            <span class="text-light">&COPY; Copyright 2021 Teacher Su Centre. All right reserved.</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",    
}
</script>

<style scoped>
.logo-container{
    width: 100%;
    height: 70px;
}

.vertical-line{
    width: 1px;
    height: 100%;
}

li, span{
    margin: 1.5rem;
}

.fab{
    font-size: 3rem;
    margin: 1rem;
    color: var(--light);
}
</style>