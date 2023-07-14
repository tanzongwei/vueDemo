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
        <div class="cover">
            <div class="triangle"></div>
            <ul>
                <li>
                    <img src="" alt="">
                    <p>个人资料</p>
                </li>
                <li>
                     <img src="" alt="">
                     <p>修改密码</p>
                </li>
                <li> 
                    <img src="" alt="">
                    <p>退出登录</p>
                </li>
            </ul>
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
    .nav .name img{
        width: 28px;
        height: 28px;
        padding-top: 8px;
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
    .nav .cover{
        background-color: #ffffff;
        width: 126px;
        height: 140px;
        position: absolute;
        right: 2.0em;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        top: 46px;
    }
    .nav .cover .triangle{
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid white;
        position: absolute;
        top: -5px;
        right: 50px;
    }

    .nav .cover ul{
        list-style: none;
    }
    .nav .cover ul li {
        height: 44px;
        font-size: 0.8em;
    }
</style>