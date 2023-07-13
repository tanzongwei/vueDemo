<script lang="ts">

export default {
    data() {
        return {

        }
    }
}
</script>

<template>
        <div class="hot clearfix">
            <h3><span>热门</span>榜单<a href="http://localhost:5173/" target="_block">更多</a></h3> 

            <div class="item clearfix">
                <div class="item-img">
                    <img src="src/assets/hot_1.png" alt="飙升榜" width="98" height="98">
                </div>
                <div class="item-text">
                    酷狗飙升榜
                    1.很受伤(Live)- 郁可唯
                    2.Lemon(柠檬)- 米津玄师
                </div>
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
        background-color: #F7F7F7;
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
    }

</style>