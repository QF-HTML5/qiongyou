<template>
    <div class="movieBox">
        <div class="boxUp">
            <span 
                v-for="tuiData in tuiDatas"
                :key ="tuiData.id"
                :class="[tuiData.sig,(isColor===tuiData.names?'green':'')]"
                class='new'
                @click="changeType"
               
            >{{tuiData.title}}</span>
        </div>
        <mineBox
            :type="this.type"
        ></mineBox>
    </div>
</template>
<script>
import mineBox from './mineBox'
export default {
    name:'movieBox',
    components:{
         mineBox
    },
    data(){
        return {
            tuiDatas:[
                {id:1,title:'推荐',names:'tuijian',sig:'tui',type:1},
                {id:2,title:'最新',names:'zuixin',sig:'tui',type:2}
            ],
            type:2,
            isColor:'tuijian'
        }
    },
    methods:{
        changeType(){
            this.isColor = this.tuiDatas[this.type-1].names;
            this.type = this.type == 2?1:2
        }
    }
}
</script>
<style lang="scss" scoped>
    .movieBox{
        margin-bottom: 0.546rem;
    }
    .boxUp{
        overflow: hidden;
        width:100%;
        height:.48rem;
        line-height: .48rem;
        background: #fff;
        display:flex;
        padding:5px 0;
        margin-bottom: 0.08rem;
        .green{
            color:#11cd6e;
        }
        .tui{
            display: inline-block;
            width:50%;
            text-align: center;
            font-size: .16rem;
        }
        .new{
            border-right: 1px solid #eee;
        }
    }
</style>