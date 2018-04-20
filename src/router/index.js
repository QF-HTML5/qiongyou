import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '../components/pages/Home/Home'
import myMine from '../components/pages/mine/myMine'
import loginPub from "../components/commons/Header/loginPub.vue"
const router = new VueRouter({
    mode:"history",
    routes:[
        //配置路由
        
        {path:'',redirect:"/Home"},
        {path: "/Home", component: Home},
        {path: '/log/:type',name:"log", component: loginPub, props:true},
        {path: '/myMine', component: myMine},
        
    ]
});
export default router;