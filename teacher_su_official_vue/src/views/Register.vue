<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center px-3 px-md-5 py-2" style="background-color:#caccd1;">
                <router-link :to="{name:'Home'}"> <i class="me-4 fs-4 fas fa-home text-dark"></i> </router-link>
                <i class="me-4 fs-4 fas fa-chevron-right"></i>
                <h5 class="fw-bold m-0">Register</h5>
            </div>
        </div>

        <div class="row d-flex align-items-center justify-content-center my-5">
            <div class="col-6 text-center">
                <Header title="How to apply" class="mb-3"></Header>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, voluptas perferendis ea tenetur est esse voluptatum, aliquam eveniet earum dicta cupiditate commodi. Eligendi ab repellendus perferendis, eaque alias architecto sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis eum molestiae, placeat architecto, mollitia quis quod, enim dicta eos aperiam repellat ex optio. Laudantium hic dolore nobis suscipit aut!
                </p>
            </div>
        </div>

         <div class="row">
            
            <div class="col-12">
                <Header title="Apply now!" class="text-center"></Header>
                <Form text_label="Comment" class="my-5"></Form>
            </div>
        </div>

        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-10">
                 <Header class="text-center mb-5" title="New terms start date"></Header>
                <table class="table table-responsive table-bordered table-hover table-striped table-success">
                    <thead>
                        <tr>
                            <th>nah</th>
                            <th>nah</th>
                            <th>nah</th>
                            <th>nah</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                            <td>date</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Form from "../components/Form.vue"

    export default {
        name:"Register",
        components: {
            Header,Form
        },
    }
</script>

<style lang="scss" scoped>

</style>