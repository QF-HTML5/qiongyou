import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '../components/pages/Home/Home'
import logIn from '../components/pages/logIn/logIn'
import myMine from '../components/pages/mine/myMine'
const router = new VueRouter({
    mode:"history",
    routes:[
        //配置路由
        
        {path:'',redirect:"/Home"},
        {path: "/Home", component: Home},
        {path: '/logIn', component: logIn},
        {path: '/myMine', component: myMine}
    ]
});
export default router;