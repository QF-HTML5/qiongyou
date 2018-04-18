<template>
    <div class="appFooter">
        <ul>
            <li 
                v-for='footerList in footerLists' 
                :key='footerList.id'
                @click="footerShowColor = footerList.color"
            >
                <a>
                     <i :class="[footerList.footerPic, (footerList.color === footerShowColor?'green':'')]"></i>
                    <span :class="footerList.color === footerShowColor?'green':''">{{footerList.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'appFooter',
    data (){
        return {
            footerLists:[
                {id:1,title:'首页',url:'',footerPic:'fa fa-home',color:'home'}, 
                {id:2,title:'发布',url:'',footerPic:'fa fa-plus-circle',color:'fabu'},
                {id:3,title:'我的',url:'',footerPic:'fa fa-user-circle-o',color:'mine'}
            ],
            footerShowColor:'home'
        }
    }
}
</script>
<style lang="scss" scoped>
    .appFooter{
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #c0bfc4;
        color: #c0bfc4;
        width:100%;
        height:0.546rem;
        .green{
            color:#11cd6e;
        }
        li{
            float: left;
            text-align: center;
            vertical-align: baseline;
            background: transparent;
            width:1.2506rem;
            height:0.546rem;
            padding-top:5px;
          
            i{
                display: block;
                font-size:0.24rem;
                margin-bottom: 5px;
                color: #999;
                margin: 0 auto;
                font-weight: normal;
            }
            span{
                display: inline-block;
               color: #999;
                line-height:1.8;
                font-size: 0.13rem;
            }
        }
    }
</style>

