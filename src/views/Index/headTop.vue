<template>
    <div class="panner">
        <div class="panner-head">
            <img src="../../assets/hot_back.png" alt="" width="20" height="20" />
            <span class="head-title">热门视频</span>
            <img src="../../assets/hot_back.png" alt="" width="20" height="20" />
            <span>换一换</span>
        </div>
        <div class="panner-icon">
            <div class="icon-img">
                <a>
                    <img src="../../assets/headerImage.png" alt="">
                </a>
            </div>
            <div class="icon-txt">
                <a href="">无论腌什么鱼，最忌放盐和料酒腌制，大胆教你无论腌什么鱼，最忌放盐和料酒腌制，大胆教你</a>
                <span class="like">1万分享</span>
                <div class="desc">
                    <span>46万次观看</span>
                    <span>家常的味道</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
a{
    text-decoration: none;
}
    .panner{
        width: 320px;
        height: 600px;
        border: 2px solid red;
        margin:  50px auto 0px;
        .panner-head{
            display: flex;
            align-items: center;
            margin: 10px;
            .head-title{
                flex: 1;
            }
            span{
                font-size: 12px;
            }
            span:last-child{
                color: #c69191;
                margin-right: 10px;
            }
        }

        .panner-icon{
            height: 94px;
            // background-color: #c69191;
            display: flex;
            .icon-img{
                width: 120px;
                margin-right: 10px;
                flex-shrink: 0;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
            }

            .icon-txt{
                // background-color: blue;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                margin-right: 16px;
                a{
                    font-size: 10px;
                    color: black;
                    line-height: 22px;
                    max-height: 44px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .like{
                    font-size: 14px;
                    background-color: #c69191;
                    color: red;
                    align-self: flex-start;
                    border-radius: 5px;
                    padding: 0 10px;
                }

                .desc{
                    display: flex;
                    justify-content: space-between;
                    span{
                        font-size: 12px;
                        margin-top: 10px;
                    }
                }
            }
        }

    }
</style>