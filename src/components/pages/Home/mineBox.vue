<template>
    <div class="mineBox">
        <div class="cardBox" 
            v-for="goodsList in goodsLists"
            :key="goodsList.id"
        >
            <div class="card-header">
                <a href="" class="auther">
                    {{goodsList.user.nick_name}}
                </a>
                <span class="pubtime">发布于{{goodsList.create_time}}</span>
            </div>    
            <div class="card-main">
                <div class="imgList">
                    <div  class="images"  >
                        <img 
                        v-for="(good_image,i)  in JSON.parse(goodsList.good_images) "
                        :key="i"
                        :src="'http://res.new.taoertao.com' + good_image" alt="">
                    </div>
                </div>
                <div class="goods-info">
                    <b>￥{{goodsList.good_price}}</b>
                     <p>
                         <span class="views"><i class="fa fa-eye"></i>{{goodsList.views}}此浏览</span>
                         <span  class="views"><i class="fa fa-heart-o"></i>{{goodsList.recommend}}人想要</span>
                     </p>
                </div>
                <div class="goods-title">
                    {{goodsList.good_name}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "mineBox",
    props:['type'],
    data(){
        return {
            goodsLists:[],
            page:1
        }
    },
    methods:{
        getgoods (){
            let {page,type} = this
        
            this.$http.get('http://www.taoertao.com/app/home_list',{
                params:{
                    page,type
                }
            }).then(res =>{
                this.goodsLists = res.data.result.result
                console.log(res)
            })
        }
    },
    created(){

    },
    watch:{
        type:{
            immediate:true,
            handler(){
                this.getgoods(); 
            }
        }
        
    }

}
</script>
<style lang="scss" scoped>
    .cardBox{
        width: 100%;
        height: 2.668rem;
        background: #fff;
        margin-bottom: 0.08rem;
        .card-header{
            height: .60rem;
            line-height: .6rem;
            padding: 0 0.1rem ;
            .auther {
                width: 1.2428rem;
                height: .6rem;
                display: inline-block;
            }
            .pubtime{
                text-align:right;
                width: 1.2rem;
                display: inline-block;
                float: right;
                color: #888;
                font-size: .14rem;
                font-weight: lighter;
            }
        }
        .card-main{
            .imgList{
                height: 1.28rem;
                overflow-x:scroll;
                overflow-y: hidden;
                .images{
                    white-space:nowrap;
                   
                    img{
                    width: 1.28rem;
                    height: 1.28rem; margin-left: 0.08rem;
                    background: #333;
                    display: inline-block;
                    }
                }
            }
            .goods-info{
                height: 0.464rem;
                line-height: 0.45rem;
                padding:0.05;
                color: #888;
                font-size: .14rem;
                font-weight: lighter;
                b{
                    margin-left: 0.08rem;
                    font-style: normal;
                    font-weight: 700;
                    color: #f30;
                    font-size: 0.16rem;
                }
                p{
                    float: right;
                    .views{
                        margin-right: .25rem;
                        i{
                            display: inline-block;
                            margin-right: 0.05rem; 
                            color: #11cd6e;
                        }
                    }
                }
            }.goods-title{
                margin-left: 0.08rem;
                padding: .05rem;
                color: #333;
                padding-bottom: 10px;
                font-size: .14rem;
                height: 0.324rem;
            }
        }
     
    }
</style>

