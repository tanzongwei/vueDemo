<script>

export default {
    props:['name'],
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="nav">
        <img src="@/assets/logo.jpg" alt="">
        <a href="#">
            <div class="name">
            <img src="@/assets/headerImage.png" alt="">
            <p>{{ name }}</p>
        </div>
        </a>
    </div>
</template>

<style scoped>
    .nav{
        width: 100%;
        height: 44px;
    }
    .nav img{
        height: 36px;
        padding-top: 0.25em;
        padding-left: 1em;
    }
    .nav .name{
        float: right;
        height: 44px;
    }
    .nav .name img{
        width: 36px;
        height: 36px;
        padding-top: 4px;
        margin-right: 0.8em;
    }
    .nav .name :last-child{
        margin: 0;
        padding-right: 2em;
        font-size: 0.5em;
        float: right;
        display: block;
        line-height: 44px;
        color: #666;
    }
</style>