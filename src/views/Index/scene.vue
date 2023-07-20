<template>
    <div class="screne">
        <div class="box">
            <div class="box-font">
                <img src="../../assets/hot_1.png" alt="" width="320" height="200">
            </div>
            <div class="box-back">反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面反面</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
    .screne{
        width: 320px;
        height: 200px;
        border: 2px solid red;
        margin: 20px auto;
        transform: perspective(800px);
        .box{
            background-color: yellow;
            width: 320px;
            height: 200px;
            transition: all ease 1s;
            position: relative;
            transform-style: preserve-3d;
            .box-font{
                width: 320px;
                height: 200px;
                background-color: pink;
                position: absolute;
                left: 0;
                right: 0;
                z-index: 2;

            }
            .box-back{
                width: 100px;
                height: 100px;
                background-color: aqua;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%) translateZ(-100px) rotateY(-180deg);
                line-height: 25px;
                overflow: hidden;
                padding: 20px;
                box-sizing: border-box;
            }
        }
    }

    .screne:hover .box{
        transform: rotateY(-180deg);
    }
</style>