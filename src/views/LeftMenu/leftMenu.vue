<script>

export default {
    props:['titles'],
    emits:['click-list'],
    data(){
        return{

        }
    }
}
</script>

<template>

    <div class="leftMenu">
        <ul>
            <li v-for="(title,index) in titles" :key="index" @click="$emit('click-list',index)"> {{ title }}</li>
        </ul>

    </div>
    
</template>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }
    .leftMenu{
        border: 2px solid #999999;
        width: 220px;
        margin-top: 20px;
        background-color: white;
    }
    .leftMenu ul li {
        list-style: none;
        height: 44px;
        text-align: center;
        line-height: 44px;
        border-bottom: 1px solid #999999;
    }
</style>