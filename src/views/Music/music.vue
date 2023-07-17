<script>
export default {
    props:['contents'],
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="music">
        <table>
            <colgroup>
                <col span="1" class="col1">
                <col span="1" class="col2">
                <col span="1" class="col3">
                <col span="1" class="col4">
                <col span="1" class="col5">

            </colgroup>
            <tr class="tableHeader">
                <th></th>
                <th>排行</th>
                <th>歌曲</th>
                <th>歌手</th>
                <th>时长</th>
            </tr>

            <tr v-for="(content,index) in contents" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ content.sort }}</td>
                <td>{{ content.name }}</td>
                <td>{{ content.auther }}</td>
                <td>{{ content.totalTime }}</td>
            </tr>

        </table>
    </div>
</template>

<style scoped>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    .music{
        height: 1000px;
        margin: 10px auto 0;
        width: 100%;
        /* border: 2px solid red; */
    }

    .col1{
        width: 80px;
    }
    .col2{
        width: 120px;
    }
    .col4{
        width: 80px;
    }
    .col5{
        width: 120px;
    }

    .music tr{
        height: 40px;
    }
    .music .tableHeader {
        background-color: #54ac83;
        color: white;
        font-size: 16px;
        height: 50px;
    }
    .music tr th{
        border: 2px solid blue;
        padding: 0;
        margin: 0;
        height: 60px;
    }
    .music tr td{
        border: 2px solid red;
        padding: 0;
        font-size: 18px;
    }
    .music tr td:first-child {
        text-align: center;
        font-weight: 400px;
    }

     tr:nth-of-type(odd){
        background-color: #f8f8f8;
    }
</style>