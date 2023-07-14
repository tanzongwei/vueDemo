<script lang="ts">

export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>
        <title>测试</title>
    </header>
        <div class="hot clearfix">
            <h3><span>热门</span>榜单<a href="http://localhost:5173/" target="_block">更多</a></h3> 

            <div class="item clearfix">
                <a href="">
                     <div class="item-img">
                    <img src="src/assets/hot_1.png" alt="飙升榜" width="98" height="98">
                    </div>
                    <div class="item-text">
                        <h4>酷狗飙升榜</h4> 
                        <p>1.很受伤(Live)- <span>郁可唯</span></p>
                        <p>2.Lemon(柠檬)- <span>米津玄师</span></p>
                        <img src="src/assets/hot_back.png" alt="" width="30px">
                    </div> 
            </a>
               
            </div>
        </div>
        
</template>

<style scoped>

    .hot {
        margin-top: 30px;
        width: 350px;
        height: 500px;
        /* border: 2px solid green; */
    }
    .hot h3 {
        height: 40px;
        line-height: 40px;
        color: #65696b;
    }
    .hot h3 span {
        color: #4A86AC;
        float: left;
    }
    .hot a {
        color: #A9A9A9;
        font-weight: 80px;
        float: right;
    }

    .clearfix {
        content: "";
        display: block;
        clear: both;
    }

    .item {
        height: 98px;
        background-color: #F7F7F7;
        margin-top: 30px;
    }
    .item .item-img {
        height: 98px;
        width: 98px;
        background-color: red;
        float: left;
    }
    .item .item-text {
        width: 247px;
        height: 98px;
        float: right;
        margin: 0px;
        padding: 0px 0px 10px 15px;
        position: relative;
    }
    .item .item-text h4 {
        font-weight: 500px;
        font-size: 10px;
        color: black;
        height: 30px;
        line-height: 30px;
        margin-top: 5px;
    }
    .item .item-text p {
        font-size: 9px;
        font-weight: 100px;
        color: #7c7c7c;
        margin-bottom: 5px;

    }

    .item .item-text p span {
        color: #c5c5c5;
    }

    .item .item-text img {
        position: absolute;
        right:5px ;
        bottom: 34px;
    }

    .item a:hover {
        background-color: #4A86AC;
    }

</style>