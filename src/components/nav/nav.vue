@import  from '@/assets/iconfont/iconfont.cs'
<script>
export default {
    props:['name'],
    emits:['persion-message','update-password','loginOut'],
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        mouseenterName() {
            this.isShow = true
        },
        mouseenterLeaveName() {
            this.isShow = false
        }
    }
}
</script>

<template>
    <div class="nav">
        <img src="@/assets/logo.jpg" alt="">
            <div class="name clearFix" 
            @mouseover="mouseenterName" 
            @mouseleave="mouseenterLeaveName">
                <img src="@/assets/headerImage.png" alt="">
                <p>{{ name }}</p>
                <div class="cover" v-if="isShow">
                    <div class="triangle"></div>
                    <ul>
                        <li @click="$emit('persion-message')">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gerenziliao"></use>
                            </svg>
                            <p>个人资料</p>
                        </li>
                        <li @click="$emit('update-password')">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xiugaimima"></use>
                            </svg>
                            <p>修改密码</p>
                        </li>
                        <li @click="$emit('loginOut')"> 
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-tuichudenglu"></use>
                            </svg>
                            <p>退出登录</p>
                        </li>
                    </ul>
                </div>
         </div>
    </div>
</template>

<style scoped>
    .nav{
        width: 100%;
        height: 44px;
        background-color: #ffffff;
        position: relative;
    }
    ul{
        margin: 0;
        padding: 0;
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
    .clearFix{
        content: "";
        display: block;
        clear: both;
    }
    .nav .name img{
        width: 28px;
        height: 28px;
        padding-top: 8px;
        margin-right: 0.8em;
    }
    .nav .name :nth-child(2){
        margin: 0;
        padding-right: 2em;
        font-size: 0.5em;
        float: right;
        display: block;
        line-height: 44px;
        color: #666;
    }
     .cover{
        background-color: #ffffff;
        width: 126px;
        height: 140px;
        position: absolute;
        right: 2.0em;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        top: 46px;
        border-radius: 5px;
    }
     .cover .triangle{
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid white;
        position: absolute;
        top: -5px;
        right: 50px;
    }

     .cover ul{
        list-style: none;
    }
     .cover ul li {
        height: 44px;
        font-size: 0.8em;
        text-align: center;
    }
      .icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
        overflow: hidden;
        line-height: 44px;
        margin-right: 10px;
        margin-top: 12px;

    }
    .nav .cover ul li p {
        color: black;
        margin: 0;
        line-height: 44px;
    }

</style>