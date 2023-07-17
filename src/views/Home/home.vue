<script>
import NavBar from '@/components/nav/nav.vue'
import LeftMenu from '../LeftMenu/leftMenu.vue'
import MainContent from '../Music/music.vue'
export default{
    name: "home",
    components: {
        NavBar,
        LeftMenu,
        MainContent
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
    <div class="home">
        <NavBar :name="name" @persion-message="persionMessage" @update-password="updatePassword" @loginOut="loginOut"/>
        <!-- <LeftMenu :titles="leftTitle" @click-list="clickLeftList" style="flex: 1;" /> -->
        <MainContent :contents="contents" />
    </div>
</template>

<style scoped>
    .home {
        width: 100%;
        height: 1500px;
        background-color: #eff4f3;
    }
</style>
