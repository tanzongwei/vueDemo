<script>
import Nav from '@/components/nav/nav.vue'
import LeftMenu from '../LeftMenu/leftMenu.vue'
export default{
    name: "home",
    components: {
        Nav,
        LeftMenu
    },
    data() {
        return {
            name: '风云无双',
            leftTitle: ['测试1','测试2','测试3']
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
            console.log('当前下标:',index)
        }
    }
}
</script>

<template>
    <div class="home">
        <Nav :name="name" @persion-message="persionMessage" @update-password="updatePassword" @loginOut="loginOut"/>
        <LeftMenu :titles="leftTitle" @click-list="clickLeftList" />
    </div>
</template>

<style scoped>
    .home {
        width: 100%;
        height: 1500px;
        background-color: #eff4f3;
    }
</style>
