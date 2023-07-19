<template>
    <div class="container">
        <div class="nav">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
        </div>
        <div class="search">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
    .container {
        width: 600px;
        height: 600px;
        background-color: blue;
        margin: 0 auto;
        .nav{
        // 弹性布局
        display: flex;
        // 水平布局两端对齐方式
        justify-content: space-between;
        // 设置主轴排列方式默认x
        flex-direction: row;
        // 设置是否换行显示
        flex-wrap:wrap;
        // 垂直居中
        // align-items: center;    // 单行
        align-content: center;  // 多行
        // 设置主轴方向和换行
        // flex-flow: row wrap;
            span{
                width: 180px;
                height: 80px;
                background-color: yellow;
                margin: 10px;
                
            }
        }
        .search{
            height: 100px;
            background-color: red;
            display: flex;
            span {
                height: 200px;
            }
            span:first-child{
                width: 80px;
                background-color: green;
            }
            span:nth-child(2){
                flex: (1);
                background-color: white;
            }
            span:last-child{
                width: 80px;
                background-color: aqua;

            }
        }


    }
</style>