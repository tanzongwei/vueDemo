<template>
    <div class="container">
        <div class="search"></div>
        <a class="searchIcon"></a>
        <div class="box">
            <img src="../../assets/hot_1.png" alt="" width="400" height="300">
            <div class="text">
                <h3>风景如画</h3>
                <span>风景如何是"风景"和"如画"的连用，意思是美丽的景色如画出来的一样，比喻景色像图画一样呈现在眼前</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
h3{
    margin: 0;
}
    .container{
        width: 100%;
        position: fixed;
        top: 80px;
        left: 50%;
        min-width: 320px;
        max-width: 540px;
        height: 44px;
        background-color: red;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        display: flex;

        .search{
            flex: 1;
            height: 100%;
            background-color: blue;
        }
        .searchIcon{
            background-color: yellow;
            height: 44px;
            width: 44px;
        }

        .box{
            margin: 100px;
            width: 400px;
            height: 300px;
            position: relative;
            overflow: hidden;

            .text{
                position: absolute;
                left: 50px;
                right: 120px;
                top: 80px;
                color: #fff;
                font-size: 14px;
                z-index: 3;
                opacity: 0;
                transform: rotate(30deg);
                transition: all ease .5s;
                h3{
                    font-size: 16px;
                    font-weight: 400;
                    margin-bottom: 5px;
                }
                span{
                    font-size: 12px;
                }
            }

        }

        .box::after{
                content: "";
                height: 0px;
                width: 500px;
                background-color: rgba(0, 0, 0, 0);
                position: absolute;
                left: 0px;
                top: 0;
                transform-origin: left center;
                transform: rotate(37deg);
                transition: all ease .5s;
            }

        .box img:hover{
            filter: blur(5px);
        }
        .box:hover::after{
            top: -150px;
            height: 300px;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .box:hover .text{
            opacity: 1.0;
            transform: rotate(0deg);
        }
    }
</style>