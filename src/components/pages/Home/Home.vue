<template>
    <div class="home">
        <appHeader></appHeader>
        <app-banner></app-banner>
        <navList></navList>
        <movieBox></movieBox> 
        
        <back-top
            size = "small"
            v-back-top:click
        ></back-top>
    </div>
</template>
<script>
    import AppBanner from './Banner';
    import AppHeader from '../../../components/commons/Header/Header';
    import navList from './navList';
    import movieBox from './movieBox'

    
    export default{
        name:'Home',
        components:{
            AppBanner,AppHeader,navList,movieBox
        }

    }
</script>

<style lang="scss">

</style>
