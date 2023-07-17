<script>
import Nav from '@/components/nav/nav.vue'
export default{
    name: "home",
    components: {
        Nav
    },
    data() {
        return {
            name: '风云无双'
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
        }
    }
}
</script>

<template>
    <div class="home">
        <Nav :name="name" @persion-message="persionMessage" @update-password="updatePassword" @loginOut="loginOut"/>
    </div>
</template>

<style scoped>
    .home {
        width: 100%;
        height: 1500px;
        background-color: #eff4f3;
    }
</style>
