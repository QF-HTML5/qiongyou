import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '../components/pages/Home/Home'
import myMine from '../components/pages/mine/myMine'
import loginPub from "../components/commons/Header/loginPub.vue"
import quanBox from '../components/pages/quan/quan'


import store from "../store"


console.log(store)

const router = new VueRouter({
    mode:"history",
    routes:[
        //配置路由
        {path:'/quanBox',component:quanBox},
        {path:'',redirect:"/Home"},
        {path: "/Home", component: Home},
        {path: '/log/:type',name:"log", component: loginPub, props:true},
       
        {path: '/myMine', component: myMine},
        
    ]
});
export default router;