<template>
    <label v-bind:for="inputId">
        <span v-for="(letter,index) in text" :key="index" :style="'transition-delay:' + index * 50 +'ms'" v-text="letter" ></span>
    </label>
</template>
<script>
export default {
    name: 'Label',
    props: {
        'inputId': String,
        'text': String 
    }
}
</script>
<style scoped>
.form-group label{
    display: inline-block;
    font-size: 1.5rem;

    position: absolute;
    top: 8px;
    z-index: -1;
}

textarea.form-control + label{
    left: 1rem;
}

.form-group .form-control + label span{
    display: inline-block;
    transition: all 0.3s ease;
    color: darkblue;
}

.form-control:focus + label span,
.form-control:valid + label span{
    color: var(--danger);
    transform: translateY(-40px);
}
</style>