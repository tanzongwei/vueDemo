<script lang="ts">

export default{
    // expose: ['clickFooter'],
    props: ['title'],
    emits:['enlarge-text'],
    data() {
        return {
            count: 0
        }
    },
    methods: {
        clickFooter() {
            // $emit('enlarge-text')
        }
    }
}
</script>

<template>
    <div class="content">
        <p>这是一个底部数据：{{ count }} 标题是: {{ title }}</p>
        <slot />
        <!-- <div @click="clickFooter">Add</div> -->
        <button @click="$emit('enlarge-text')">add</button>
    </div>
</template>


<style scoped>
    .content :nth-last-child{
        color: red;
    }
</style>