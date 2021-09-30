<template>
    <div class="container p-3">
        <div class="row">
            <div class="col-12 my-md-5">
                <Header class="text-center mb-5" title="Fnancial-aid scholarship application form"></Header>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur exercitationem nam quia architecto nemo, aliquam quas reiciendis vel suscipit asperiores ab possimus impedit numquam nobis cum itaque natus ad! Dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique porro, laboriosam aperiam iure voluptates. Incidunt laboriosam asperiores nulla, ut quis cupiditate deleniti libero fugiat eveniet aliquam sint, in labore!</p>
            </div>
            <div class="col-12">
                <Form></Form>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Form from "../components/Form.vue"
    export default {
        name:"finance",
        components:{Header,Form}
    }
</script>

<style lang="scss" scoped>

</style>