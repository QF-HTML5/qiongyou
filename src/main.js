// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './modules/rem.js'
import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false

import store from './store'
// 处理axios，让组件通过this.$http来使用
import axios from 'axios'
Vue.prototype.$http = axios
//引入全局的scss文件
// 在webpack中有一个特性，一切皆模块，在这里webpack检测到scss文件之后会编译之后再将其拿出去
import './stylesheets/main.scss'; 



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

