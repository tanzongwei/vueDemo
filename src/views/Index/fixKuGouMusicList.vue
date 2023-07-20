<template>
    <div class="music-item">
        <div class="item" v-for="(item, index) in items" :key="index">
            <div class="item-content">
                <a class="item-icon">
                    <img src="../../assets/logo.jpg" alt="" />
                    <span>
                        <img src="../../assets/hot_back.png" alt="">
                        {{ item.number }}
                    </span>
                 </a>
                <a class="item-txt">{{ item.title }}</a>
            </div>

        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            items:[
                {'title':'标题一标题一标题一标题一标题一标题一标题一标题一标题一','number':'244.4万','img':'../../assets/logo.jpg'},
                {'title':'标题二','number':'244.4万','img':'../../assets/logo.jpg'},
                {'title':'标题三','number':'244.4万','img':'../../assets/logo.jpg'},
                {'title':'标题四','number':'244.4万','img':'../../assets/logo.jpg'},
                {'title':'标题五','number':'244.4万','img':'../../assets/logo.jpg'},
                {'title':'标题六','number':'244.4万','img':'../../assets/logo.jpg'},
                {'title':'标题七','number':'244.4万','img':'../../assets/logo.jpg'},
                {'title':'标题八','number':'244.4万','img':'../../assets/logo.jpg'},
            ],
        }
    }
}
</script>

<style lang="less">
    .music-item{
        width: 100%;
        // height: 800px;
        background-color: pink;
        margin: 50px auto 0;
        display: flex;
        flex-wrap: wrap;

        .item{
            width: 25%;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .item-content{
                width: 120px;
                .item-icon{
                    width: 120px;
                    height: 120px;
                    position: relative;
                    img{
                        width: 120px;
                        height: 120px;
                    }
                    span{
                        position: absolute;
                        left: 10px;
                        bottom: 10px;
                        color: white;
                        font-size: 11px;
                        display: flex;
                        z-index: 2;
                        img{
                            width: 20px;
                            height: 20px;
                        }

                    }

                }
                .item-txt{
                    width: 120px;
                    font-size: 10px;
                    font-weight: 400;
                    color: #797979;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    display: inline-block;
                    margin-top: 5px;
                }
            }

        }
    }

    .item-icon::after{
        content: '';
        background-image: linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,0.5));
        display: block;
        width: 100%;
        height: 60px;
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>