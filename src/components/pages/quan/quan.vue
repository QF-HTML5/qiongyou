<template>
    <div class="quan-box">
        <div class="greenTop">
            <a href="/" class="back-btn">
                <i class="iconfont fa fa-angle-left"></i>
            </a>
            <span class="logInSpan">最新优惠券</span>
        </div>
       <div class="text-box">
            <ul>
                <li v-for ='quanList in quanLists' :key="quanList.id">
                    <div class="quan-top">
                        <img :src="quanList.pict_url" alt="">
                    </div>
                    <div class="quan-bottom">
                        <div class="quan-text">
                            {{quanList.title}}
                        </div>
                        <div class="quan-pay">
                            <div class="pay-one">
                                现价:￥<span>{{quanList.zk_final_price
}}</span>
                            </div>
                            <div class="pay-two">
                                券后价:￥<span>4.68</span>
                            </div>
                        </div>
                        <div class="quan-play">
                            <span class="play-one">券</span>
                            {{quanList.coupon_info}}
                        </div>
                    </div>
                </li>
            </ul>
       </div>
    </div>
</template>

<script>
import Vue from "vue"
export default {
  name:'quanBox',
  data (){
      return {
          quanLists:[],
          page:1,
          type:4,
          scrollSwitch:true

      }
  },
  methods:{
      getQunan (){
          let {page,type} = this
          this.$http.post('http://www.taoertao.com/api/alimama/quan',{
              params:{
                  page,
                  type
              }
          }
          ).then(res =>{
              this.page++;
              this.quanLists = this.quanLists.concat(res.data.data)
              Vue.nextTick(()=>{
                  this.scrollSwitch = true;
              })
          })
      }
  },
   watch:{
        type:{
            immediate:true,
            handler(){
                this.getQunan(); 
            }
        }
        
    },
    created(){
        document.body.onscroll = function(){
            // console.log(document.body.scrollTop)
            if(document.body.scrollTop >= document.body.offsetHeight - document.documentElement.clientHeight - 10 && this.scrollSwitch){
                this.getQunan()
            }
            this.scrollSwitch = false;
        }
    }
}

</script>

<style lang="scss" scoped>
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
            font-size:0.28rem;
        }
        .logInSpan{
            height: 0.5rem;
            font-size: 20px;
            line-height: .5rem;
            color: #fff;
        }
    }
    .text-box{
        width:100%;
        li{
            width: 48%;
            margin: 1%;
            float: left;
            background: #fff;
            color: #333;
            .quan-top{
                width: 100%;
                height: 48vw;
                img{
                    width:100%;
                }
            }
            .quan-bottom{
                padding: 0 5px;
                .quan-text{
                    overflow: hidden;
                    height:0.20rem;
                    line-height: .2rem;
                    font-size: 13px;
                }
                .quan-pay{
                    font-size: 12px;
                    color: #aaa;
                    .pay-one span{
                        text-decoration:line-through;
                    }
                }
                .quan-play{
                    border: 1px solid #f30;
                    display: inline-block;
                    padding-right: 5px;
                    border-radius: 3px;
                    font-size: 14px;
                    overflow: hidden;
                    margin: 5px 0;
                    .play-one{
                        display: inline-block;
                        padding: 0 5px;
                        background: #f30;
                        color: #fff;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
</style>

