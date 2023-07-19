export default {
    data() {
        return {
            'message':''
        }
    },
    methods: {
        clickButton() {
        //  let button =  document.getElementById('button')
        //   button.innerHTML = "就是这样"
            // button.style.color = "#999999"
        document.getElementById('button').innerHTML = "什么鬼"

            // myImage.src = "../../assets/logo.jpg"
            // $("p").hide();
        },
    },
    computed() {
        console.log('computed')
    },
    created() {
        console.log('创建了vue')
    },
}
