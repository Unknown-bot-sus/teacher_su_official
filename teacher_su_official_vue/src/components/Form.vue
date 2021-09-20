<template>
    <form action="" method="" id="form" class="">
        <div class="row">
            <div class="form-group col-lg-4 col-sm-6">
                <input type="text" id="full-name" class="form-control" autocomplete="off" required />
                    <Label inputId="full-name" text='Full-name'></Label>
            </div>

            <div class="form-group col-lg-4 col-sm-6">
                <input type="number" id="age" class="form-control" required />
                <Label inputId="age" text="Age"></Label>
            </div>
        </div>

        <div class="row">
            <div class="form-group col-lg-4 col-sm-6">
                <input type="email" id="email" class="form-control" required />
                <Label inputId="age" text="Email"></Label>
            </div>

            <div class="form-group col-lg-4 col-sm-6">
                <input type="number" id="mobo-num" class="form-control" required />
                <Label inputId="mobo-num" text="Mobile-number"></Label>
            </div>
        </div>

        <div class="row">
            <div class="form-group col-lg-4 col-sm-6">
                <input type="text" id="address" class="form-control" autocomplete="off" required />
                <Label inputId="address" text="Address"></Label>
            </div>

            <div class="form-group col-lg-4 col-sm-6">
                <input type="text" id="fb-link" class="form-control" autocomplete="off" required />
                <Label inputId="fb-link" text="Facebook-link"></Label>
            </div>
        </div>

        <div class="row">
            <div class="form-group col-10">
                <textarea id="text-area" class="form-control" required></textarea>
                <Label inputId="text-area" :text="text_label"></Label>
            </div>
        </div>

        <div class="row">
            <div class="d-grid col-lg-1 col-sm-4">
                <button type="submit" class="btn btn-danger">Submit</button>
            </div>
            
        </div>
    </form>
</template>

<script>
import Label from './Label'
export default {
    name: "Form",
    components: {
        Label
    },
    props: {
        text_label: String,
    },
}
</script>

<style scoped>
form{
    margin: 2rem 0;
}

.form-group{
    position: relative;
    margin: 1.5rem auto;
}

input.form-control{
    background-color: transparent;
    font-size: 1.5rem;

    border: none;
    border-bottom: 1px solid var(--dark);
    border-radius: 0;
}

textarea{
    border: 1px solid var(--dark);
    min-height:10rem;
}

.form-control:focus{
    outline: none;

    border: none;
    box-shadow: none;
    border-bottom: 1px solid var(--dark);
}

.btn{
    padding: 0.5rem 2rem;
    margin-left: 10rem;
    border-radius: 20px;

    transition: all 0.5s;
}

.btn:focus{
    transform: scale(0.98);
    color: var(--danger);
    background-color: var(--light);
    box-shadow: 0px 0px 40px var(--danger);
}

@media only screen and (max-width: 652px){
    .btn{
        margin-left: 2rem;
        padding: 0.5rem 1rem;
    }
}
</style>