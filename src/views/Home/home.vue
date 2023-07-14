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
    }
}
</script>

<template>
    <div class="home">
        <Nav :name="name" />
    </div>
</template>

<style scoped>
    .home {
        width: 100%;
        height: 1500px;
        background-color: #eff4f3;
    }
</style>
