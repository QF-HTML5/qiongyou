<template>
    <div class="swiper-container app-banner">
        <div class="swiper-wrapper img-background">
            <a :href="banner.url"
            v-for = 'banner in banners'
            :key ='banner.id'
            class="swiper-slide">
                <img width="100%" :src="banner.image" alt="">
            </a>
        </div>
        <div class="swiper-pagination">
</div>
    </div>
</template>
<script>

import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Vue from 'vue'
export default {
    name:'AppBanner',
    data (){
        return {
            banners: []
        }
    },
    methods:{
        getBanners (){
            this.$http.get('/static/banner.json').then(res =>{
                this.banners = res.data.bannerList
                Vue.nextTick(() =>{
                    new Swiper('.app-banner',{
                        autoplay:true,
                        pagination:{el:'.swiper-pagination'}
                    }) 
                })
            })
        }
    },
    created () {
        this.getBanners()
    }
}

</script>

<style lang="scss" scoped>
    .swiper-slide,.swiper-wrapper{
        height:1.44rem;
    }
</style>


