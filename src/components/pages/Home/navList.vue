<template>
    <div class="navList">
        <ul>
            <li v-for=" (navList,n) in navLists" :key="navList.id">
                <a href="">
                    <i :class="clist[n]" class="listFont"></i>
                    <span>{{navList.cate_name}}</span>
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
            navLists:[],
            clist:["fa fa-tablet","fa fa-desktop","fa fa-cogs","fa fa-plug","fa fa-book","fa fa-coffee","fa fa-support","fa fa-bicycle"]
        }
    },
    methods:{
        getCategory (){
            this.$http.post('http://www.taoertao.com/app/get_all_category').then(res =>{
                this.navLists = res.data.result
            })
        }
    },
    created(){
        this.getCategory ()
    }
}
</script>
<style lang="scss" scoped>
    .navList{
        width: 100%;
        margin:8px 0;
        padding:8px 0;
        height:2.03rem;
        background: #fff;
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
                width: 0.6rem;
                height: 0.6rem;
                line-height: 0.6rem;
                background: #11cd6e;
                color: #fff;
                border-radius: 50%;
                margin: 0 auto;
                font-weight: normal;
            }
            span{
                display: inline-block;
                height:.3rem;
                color: #333;
                line-height: .3rem;
                font-size: 0.16rem;
            }
        }
    }
</style>


