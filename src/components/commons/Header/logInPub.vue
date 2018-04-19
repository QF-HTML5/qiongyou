<template>
    <div class="logInPub">
        <div class="denglu">        
            <div class="greenTop">
                <a href="" class="back-btn">
                    <i class="iconfont fa fa-angle-left"></i>
                </a>
                <span class="logInSpan">登录</span>
            </div>
        
            <div class="login-wrap"> 
                <div class="weui-cell">
                    <input type="text" class="weui-input" placeholder="手机号">
                </div>
            </div>

            <a href="" class="btn-deng">{{setAll.title}}</a>
            <div class="small-btns-wrap">
                <a href="" class="zhu">注册</a>
                <a href="" class="zhu">忘记密码</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'logInPub',
    props:[
        'setAll'
    ]
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
                display: flex;
                -webkit-box-align: center;
                align-items: center;
            .weui-cell{
                vertical-align: baseline;
                background: transparent;
                width: 3.432rem;
                height: .52rem;
                line-height: 0.52rem;
                background-color: #fff;
                font-size: 17px;
                overflow: hidden;
                .weui-input{
                    margin-left:0.1rem;
                    width: 3.132rem;
                    border: 0;
                    outline: 0;
                    -webkit-appearance: none;
                    background-color: transparent;
                    font-size: inherit;
                    color: inherit;
                    height: 1.47058824em;
                    line-height: 1.47058824;
                }
            }
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

