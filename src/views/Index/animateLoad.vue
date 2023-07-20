
<template>
    <div class="animate">
        <div class="box">
            <div class="item item1 animate__animated animate__backInDown"></div>
            <div class="item item2 animate__animated animate__backInDown"></div>
            <div class="item item3 animate__animated animate__backInDown"></div>
            <div class="item item4 animate__animated animate__backInDown"></div>
            <div class="item item5 animate__animated animate__backInDown"></div>
            <div class="item item6 animate__animated animate__backInDown"></div>

        </div>
    </div>
</template>

<script>
import 'animate.css';
export default {
    
}
</script>

<style lang="less">
.animate{
    width: 100%;
    height: 100vh;
    // background-color: blue;
    position: relative;
    .box{
        width: 1080px;
        height: 540px;
        background-color: beige;
        position: absolute;
        left: 50%;
        margin-left: -540px;
        top: 50%;
        margin-top: -270px;
        .item{
            float: left;
            margin: 10px;

        }
        .item1{
            width: 250px;
            height: 520px;
            background-image: linear-gradient(to bottom,#fff,pink);
        }
        .item2,.item3{
            width: 385px;
            height: 250px;
            background-image: linear-gradient(to bottom,pink,#fff);
        }
        .item4,.item5,.item6{
            height: 250px;
            width: 250px;
            background-image: linear-gradient(to bottom,#fff,pink);
        }
    }
}

</style>