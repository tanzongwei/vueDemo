<script lang="ts">
import FooterVue from './footer.vue'

export default {
    components: {
        FooterVue
    },
    data() {
        return {
            // isShow: false
            newTodoText:'',
            newTodoId:4,
            items: [{message:'test',id:1}, {message:'bar',id:2}],
            count: 0,
            textArea: '',
            isSelectCheckBox: false,
            selected: '',
            options: [
                {text:'one',value:'A'},
                {text:'two',value:'B'},
                {text:'three',value:'C'}
            ],
            dynaSelect:'A',
            age: 16,
            list: ['one','two','three'],
            postFontSize:1
        }
    },
    mounted() {
        // console.log(this.$refs.input.focus())
        console.log(this.$refs.items)
    },
    methods: {
        jump() {
            
        },
        addNewTodo() {
            console.log(this.newTodoText)
        },
        addCount(even: any) {
            this.count++
            console.log(even.target.tagName)
        },
        waning(message: string,even: any) {
            alert(message)
            console.log(even)
        },
        doThis() {
            console.log(this.count)
        },
        keyUpEnter(even: any) {
            console.log(even.key)
        },
        evenLisent(even: any) {
            console.log(even)
        },
        checkBox() {
            !this.checkBox
        }
    }
}
</script>


<template>
    <div class="content">
        <!-- <button @click="jump">页面跳转</button>
         -->
        <li v-for="item in items" :key="item.id">{{ item.message + item.id}}</li>
        <form @submit.prevent="addNewTodo">
            <input type="text" v-model="newTodoText" id="newTodoId"  placeholder="请输入">
          <button>add</button>
        </form>

        <button @click="addCount">add</button>
        <p>{{ count }}</p>
        <button @click="waning('message',$event)">数据调用</button>
        <button @click="(even) => waning('messag2',even)">数据调用2</button>
        <a href="https://www.baidu.com/?tn=02003390_25_hao_pg" target="_blank" @click.once="doThis">百度超链接</a>
        <div>
            <input @keyup.enter="keyUpEnter" type="text" placeholder="键盘监听" />
            <input @click.ctrl="evenLisent" type="text" placeholder="事件监听" />
            <div @click.exact="evenLisent">事件监听</div>
        </div>
        <div>
            <p>测试数据:{{ textArea }}</p>
            <textarea v-model="textArea">

            </textarea>
        </div>
        <div>
            <input v-model="isSelectCheckBox" type="checkbox"/>
            <p>{{ isSelectCheckBox }}</p>
        </div>
        <div >
            <div>{{ selected }}</div>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>

        <div>
            <p>动态渲染:{{ dynaSelect }}</p>
            <select v-model="dynaSelect">
                <option v-for="option in options" :value="option.value" :key="option.text">{{ option.text }}
                </option>
            </select>
        </div>
        <div>
            <p>age:{{ age }}</p>
            <input v-model.number="age" type="text" placeholder="请输入年龄" />
        </div>
        <div>
            <p>refs的使用</p>
            <ul>
                <li v-for="(item,index) in list" :key="index" ref="items">
                    {{ item }}
                </li>
            </ul>
        </div>

        <div style="{font-size: postFontSize + 'em'}">
            <p> 组件测试 </p>
            <FooterVue @enlarge-text="postFontSize += 0.1" title="这是组件一" ref="footer" /> 
            <FooterVue title="这是组件二" ref="footer" /> 
            <FooterVue title="这是组件三" :key="333" ref="footer" /> 
            <footer-vue title="这是组件四">这是什么鬼</footer-vue>
        </div>
    </div>
</template>

<style scoped>
    .content li {
        list-style: none;
    }
    a {
        font-style: normal;
        color: black;
        font-weight: 200px;

    }
    
</style>