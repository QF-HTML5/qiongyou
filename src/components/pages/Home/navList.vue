<template>
    <div class="navList">
        <ul>
            <li v-for="navList in navLists" :key="navList.id">
                <a href="">
                    <i :class="navList.fontPic" class="listFont"></i>
                    <span>{{navList.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import vue from "Vue"
export default {
    name:'navList',
    data (){
        return {
            navLists:[
                {id:1,title:'手机',url:"",fontPic:"fa fa-tablet"},
                {id:2,title:'电脑',url:"",fontPic:"fa fa-desktop"},
                {id:3,title:'配件',url:"",fontPic:"fa fa-cogs"},
                {id:4,title:'电器',url:"",fontPic:"fa fa-plug"},
                {id:5,title:'书籍',url:"",fontPic:"fa fa-book"},
                {id:6,title:'娱乐',url:"",fontPic:"fa fa-coffee"},
                {id:7,title:'运动',url:"",fontPic:"fa fa-support"},
                {id:8,title:'代步',url:"",fontPic:"fa fa-bicycle"}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .navList{
        height:1.8725rem;
        width: 100%;
        margin:8px 0;
        padding:8px 0;
        li{
            float: left;
            text-align: center;
            vertical-align: baseline;
            background: transparent;
            width:25%;
            height: 0.8963rem;
            i{
                display: block;
                font-size: 0.30rem;
                width: 16vw;
                height: 16vw;
                line-height: 16vw;
                background: #11cd6e;
                color: #fff;
                border-radius: 8vw;
                margin: 0 auto;
                font-weight: normal;
            }
            span{
                color: #333;
                line-height: 30px;
                font-size: 0.16rem;
            }
        }
    }
</style>


