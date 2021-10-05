<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Help</h5>
            </div>
        </div>
        <div class="row my-5 mb-5">
            <div class="col-12">
                <Header title="Study tool and software" class="text-center courses-text"></Header>
                <div class="chItem-con">

                    <div class="d-flex align-items-center justify-content-left justify-content-lg-evenly flex-lg-wrap mt-5 chItem" >
                
                        <div style="min-width:300px;" @click="activeTab = 'zoom'" class="bg-primary text-light d-flex align-items-center justify-content-center flex-column p-3 mx-1 item-hover">
                            <i class="fs-1 fas fa-video"  style="border:2px solid white;border-radius:50%;padding:20px 17px;"></i>
                            <h3 class="fw-bold  mt-2">Zoom guide</h3>
                        </div>

                        <div style="min-width:300px;" @click="activeTab = 'ppt'" class="bg-danger text-light d-flex align-items-center justify-content-center flex-column p-3 mx-1 item-hover">
                            <i class="fs-1 fas fa-file-powerpoint"  style="border:2px solid white;border-radius:50%;padding:20px 25px;"></i>
                            <h3 class="fw-bold  mt-2">Powerpoint</h3>
                        </div>

                        <div style="min-width:300px;" @click="activeTab = 'vde'" class="bg-secondary text-light d-flex align-items-center justify-content-center flex-column p-3 mx-1 item-hover">
                            <i class="fs-1 fas fa-photo-video"  style="border:2px solid white;border-radius:50%;padding:20px 15px;"></i>
                            <h3 class="fw-bold  mt-2">Video editing</h3>
                        </div>

                </div>

                </div>
            </div>

            <div class="col-12">
                <component :is ="activeTab" />
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import zoom from "../components/zoom.vue"
import vde from "../components/vde.vue"
import ppt from "../components/ppt.vue"
    export default {
        name:"Help",
        components: {
            Header,ppt,vde,zoom
        },
        data() {
            return {
                activeTab: 'zoom'
            }
        },
    }
</script>

<style lang="scss" scoped>
.item-hover:hover{
    transition: 0.5s;
    transform: translateY(-15px);
}
 @media only screen and (max-width: 1111px){
  
        .chItem-con{
        max-width: 1600px;
        overflow-x: scroll;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .chItem-con::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .chItem-con {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        }
}
@media only screen and (max-width: 484px){
        .courses-text{
        font-size: 1.5rem;
        }
}
</style>