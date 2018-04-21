import BackTop from './back-top/BackTop.vue'

//use就相当于在执行install方法，也就相当于在注册我们的组件
export default {
    install(Vue) {
        Vue.component('back-top', BackTop)
            // console.log("hahaha")
    }
}