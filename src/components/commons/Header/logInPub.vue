<template>
    <div class="logInPub">
        <div class="denglu">        
            <div class="greenTop">
                <a
                href="/" class="back-btn"
                >
                    <i class="iconfont fa fa-angle-left"></i>
                </a>
                <span class="logInSpan">{{title[type]}}</span>
            </div>
            
            <div class="login-wrap"> 
                <login-inputs v-if="type=='login'" />
                <forget-inputs v-else-if="type=='forget'" />
                <zhuce-inputs v-else-if="type== 'zhuce'" />
            </div>

            <a href="" class="btn-deng">{{title[type]}} </a>
            <div class="small-btns-wrap">
                <router-link :to="{name:'log',params:{type:bottomButton.left.params}}"
                 class="zhu">{{bottomButton.left.title}}</router-link>
                <router-link :to="{name:'log',params:{type:bottomButton.right.params}}" class="zhu">{{bottomButton.right.title}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import loginInputs from "../../pages/login/login.vue"
import zhuceInputs from "../../pages/zhuce/zhuce.vue"
import forgetInputs from "../../pages/forget/forget.vue"
export default {
    name:'logInPub',
    props:[
        'type'
    ],
    components:{
        loginInputs,
        forgetInputs,
        zhuceInputs
    },
    created(){
        console.log(this.type)
    },
    data(){
       return {
           title:{
               login:"登录",
               zhuce:"注册",
               forget:"忘记密码"
            }
       } 
    },
    computed:{
        bottomButton(){
            let value = {
                left:{},
                right:{}
            }
            if(this.type=="zhuce"){
                value.left.title = "登录";
                value.left.params = "login";
                value.right.title = "找回密码";
                value.right.params = "forget";
            }else if(this.type == "login"){
                value.left.title = "注册";
                value.left.params = "zhuce";
                value.right.title = "找回密码";
                value.right.params = "forget";
            }else{
                value.left.title = "注册";
                value.left.params = "zhuce";
                value.right.title = "登录";
                value.right.params = "login";
            }
            return value;
        }
    }
}
</script>
<style lang="scss" scoped>
    .denglu {
        .greenTop{
            width: 100%;
            height: 0.5rem;
            background: #11cd6e;
            text-align: center;
            position: relative;
            .back-btn[data-v-b773d4b4] {
                font-size: 0.16rem;
            }
            .iconfont{
                position: absolute;
                left: 0;
                font-size: 0.16rem;
                line-height: 0.18rem;
                color: #fff;
                font-size:0.24rem;
            }
            .logInSpan{
                height: 0.5rem;
                font-size: 20px;
                line-height: .5rem;
                color: #fff;
            }
        }
       .login-wrap{
            padding: 10px 15px;
            border-radius: 3px;
            width:3.43rem;
            margin:auto;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            background: #ffffff;

        }
        .btn-deng{
            width: 3.432rem;
            color: #fff;
            background: #11cd6e;
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-left: 14px;
            padding-right: 14px;
            font-size: 18px;
            text-align: center;
            text-decoration: none;
            line-height: 0.456rem;
            border-radius: 5px;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            overflow: hidden;
        }
        .small-btns-wrap{
            margin-left: 0.14rem;
            width: 3.432rem;
            display:flex;
            justify-content: space-between;

            .zhu {
                padding: 0 0.15rem;
                margin-top: 0.14rem;
                color: #11cd6e;
                border-color: #11cd6e;
                line-height: 0.256rem;
                height: 0.256rem;
                display: inline-block;
                font-size: 13px;
                border: 1px solid #1aad19;
                text-align: center;
                text-decoration: none;
                border-radius: 5px;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
            }
        }
    
    }
</style>

