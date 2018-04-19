<template>
    <div class="myMine">
        <div class="user">
            <div class="user-header">
                <img src="http://m.taoertao.com/static/assets/images/default.png" alt="" class="avatar">
                <div class="noLogin">
                    <a href="" class="user-btn">登录</a>
                    <a href="" class="user-btn">注册</a>
                </div>
            </div>
            <div class="user-content">
                <div class="link-group">
                    <a href="" class="link">
                        <i class="iconfont fa fa-upload"></i>
                        <span>我发布的</span>
                    </a> 
                    <a href="" class="link">
                        <i class="iconfont fa fa-heart-o"></i>
                        <span>我想要的</span>
                    </a>
                </div>
                <div class="link-group">
                    <a href="" class="link">
                        <i class="iconfont fa fa-user-o"></i>
                        <span>个人资料</span>
                    </a> 
                    <a href="" class="link">
                        <i class="iconfont fa fa-ticket"></i>
                        <span>优惠券</span>
                    </a>
                </div>
                <div class="link-group">
                    <a href="" class="link">
                        <i class="iconfont fa fa-gear"></i>
                        <span>个人资料</span>
                    </a> 
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'myMine'
}
</script>
<style lang="scss" scoped>
    .user{
        background: #fff;
        .user-header{
            padding: 50px 0 30px;
            background-color: #11cd6e;
            .avatar{
                width: 0.8rem;
                height: 0.8rem;
                display: block;
                margin: 0 auto;
                border-radius: 50%;
                background: #fff;
            }
            .noLogin{
                text-align: center;
                margin-top: 0.16rem;
                color: #fff;
                .user-btn {
                    width: 0.5rem;
                    height: 0.34rem;
                    color: #fff;
                    display: inline-block;
                    line-height: 0.34rem;
                    border: 1px solid #fff;
                    margin: 0.01rem;
                    border-radius: 3px;
                    font-size: 16px;
                }

            }
        }
        .user-content{
            width: 100%;
            font-size: .16rem;
            vertical-align: baseline;
            .link-group{
                height: 1.356rem;
                margin-bottom: 0;
                margin-top: 0.1rem;
                padding: 10px 15px;
                .link{
                    height: 0.578rem;
                    display: block;
                    line-height:0.578rem;
                    border-bottom: 1px solid #e5e5e5;
                    span{
                        color: #666;
                        font-size: .16rem;
                    }
                }
            }





        }
       
    }
</style>


