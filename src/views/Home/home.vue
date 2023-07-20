<script>
import NavBar from '@/components/nav/nav.vue'
import LeftMenu from '../LeftMenu/leftMenu.vue'
import MainContent from '../Music/music.vue'
import JsStudy from '../JQuery/jquery.vue'
import Flex from '../Index/flex.vue'
import FlexStudy from '../Index/FlexStudy.vue'
import AnimateLoad from '../Index/animateLoad.vue'
import Scene from '../Index/scene.vue'
import FixKuGouMusicList from '../Index/fixKuGouMusicList.vue'
import HeadTop from '../Index/headTop.vue'
export default{
    name: "home",
    components: {
        NavBar,
        LeftMenu,
        MainContent,
        JsStudy,
        Flex,
        FlexStudy,
        AnimateLoad,
        Scene,
        FixKuGouMusicList,
        HeadTop
    },
    data() {
        return {
            name: '风云无双',
            leftTitle: ['测试1','测试2','测试3'],
            contents:[
                {'id':1,'sort':'排行','name':'歌曲','auther':'歌手','totalTime':'时长'},
                {'id':1,'sort':'排行','name':'歌曲','auther':'歌手','totalTime':'时长'},
                {'id':1,'sort':'排行','name':'歌曲','auther':'歌手','totalTime':'时长'},
                {'id':1,'sort':'排行','name':'歌曲','auther':'歌手','totalTime':'时长'},
                {'id':1,'sort':'排行','name':'歌曲','auther':'歌手','totalTime':'时长'}
        ]
        }
    },
    methods: {
        persionMessage() {
            console.log('个人资料')
        },
        updatePassword() {
            console.log('更新密码')
        },
        loginOut() {
            alert("确定要退出登录吗？")
        },
        clickLeftList(index) {
            if (index == 0) {
                
            }
        }
    }
}
</script>

<template>
    <!-- <div class="home"> -->
        <!-- <NavBar :name="name" @persion-message="persionMessage" @update-password="updatePassword" @loginOut="loginOut"/> -->
        <!-- <LeftMenu :titles="leftTitle" @click-list="clickLeftList" style="flex: 1;" /> -->
        <!-- <MainContent :contents="contents" /> -->
        <!-- <JsStudy :title="js学习"/> -->
        <!-- <Flex /> -->
        <!-- <FlexStudy /> -->
        <!-- <AnimateLoad /> -->
        <!-- <Scene /> -->
        <!-- <FixKuGouMusicList /> -->
        <HeadTop />
    <!-- </div> -->

</template>
<style scoped>
    body{
        margin: 0;
        padding: 0;
    }
    .home {
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: #eff4f3;

    }
</style>
